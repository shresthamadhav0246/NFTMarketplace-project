import React, { useContext, useEffect, useState } from "react";
import {
  RiUserFollowFill,
  RiUserUnfollowFill,
  RiAwardLine,
} from "react-icons/ri";
import styles from "./Follower.module.css";
import FollowerTabCard from "./FollowerTabCard/FollowerTabCard";

import {
  getTotalLikes,
  unfollowNFT,
  getFollowedNFTs,
  followNFT,
} from "@/utils/api";
import NFTMarketplaceContext from "@/context/NFTMarketplace";

const Follower = ({ nfts }) => {
  const [tab, setTab] = useState("popular");
  const [popularNFTs, setPopularNFTs] = useState([]);
  const [followingNFTs, setFollowingNFTs] = useState([]);
  const [newsNFTs, setNewsNFTs] = useState([]);

  const { currentAccount } = useContext(NFTMarketplaceContext);

  useEffect(() => {
    const getData = async () => {
      const likes = await fetchAllLikes(nfts);
      const follows = await getFollowedNFTs(currentAccount);

      categorizeNFTs(nfts, likes, follows);
    };
    getData();
  }, [currentAccount, nfts]);

  const fetchAllLikes = async (nfts) => {
    const likes = await Promise.all(
      nfts.map(async (nft) => {
        const totalLikes = await getTotalLikes(nft.itemId);
        return { tokenId: nft.itemId, totalLikes };
      })
    );
    return likes;
  };

  const categorizeNFTs = (nfts, likes, follows) => {
    const likesMap = new Map();
    likes.forEach((like) => {
      likesMap.set(like.tokenId, like.totalLikes);
    });

    const followsSet = new Set(follows.map((follow) => follow.tokenId));

    const nftsWithCounts = nfts.map((nft) => ({
      ...nft,
      likesCount: likesMap.get(nft.itemId) || 0,
      isFollowed: followsSet.has(nft.itemId.toString()),
    }));

    const popular = [...nftsWithCounts].sort(
      (a, b) => b.likesCount - a.likesCount
    ); // Most liked
    const following = nftsWithCounts.filter((nft) => nft.isFollowed); // NFTs from followed users
    const news = nftsWithCounts.slice(0, 5); // Latest NFTs

    setPopularNFTs(popular);
    setFollowingNFTs(following);
    setNewsNFTs(news);
  };

  const handleFollow = async (nft) => {
    const originalFollowStatus = nft.isFollowed;

    try {
      if (nft.isFollowed) {
        await unfollowNFT(currentAccount, nft.itemId);
        nft.isFollowed = false;
      } else {
        await followNFT(currentAccount, nft.itemId);
        nft.isFollowed = true;
      }

      // After the follow/unfollow operation, we need to update the follow status
      const updatedFollows = await getFollowedNFTs(currentAccount);
      categorizeNFTs(nfts, [], updatedFollows);
    } catch (error) {
      console.error("Error following/unfollowing NFT:", error);
      nft.isFollowed = originalFollowStatus; // Revert on failure
    }
  };

  return (
    <div className={styles.follower}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${tab === "popular" ? styles.active : ""}`}
          onClick={() => setTab("popular")}
        >
          <RiUserFollowFill /> Popular
        </button>
        <button
          className={`${styles.tab} ${
            tab === "following" ? styles.active : ""
          }`}
          onClick={() => setTab("following")}
        >
          <RiUserUnfollowFill /> Following
        </button>
        <button
          className={`${styles.tab} ${tab === "news" ? styles.active : ""}`}
          onClick={() => setTab("news")}
        >
          <RiAwardLine /> News
        </button>
      </div>
      <div className={styles.content}>
        {tab === "popular" &&
          popularNFTs.map((nft) => (
            <FollowerTabCard
              key={nft.itemId}
              nft={nft}
              onFollow={() => handleFollow(nft)}
            />
          ))}
        {tab === "following" &&
          followingNFTs.map((nft) => (
            <FollowerTabCard
              key={nft.itemId}
              nft={nft}
              onFollow={() => handleFollow(nft)}
            />
          ))}
        {tab === "news" &&
          newsNFTs.map((nft) => (
            <FollowerTabCard
              key={nft.itemId}
              nft={nft}
              onFollow={() => handleFollow(nft)}
            />
          ))}
      </div>
    </div>
  );
};

export default Follower;
