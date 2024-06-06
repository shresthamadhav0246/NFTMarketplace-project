// pages/ProfilePage.js
import React, { useState, useEffect, useContext } from "react";
import UserProfile from "../profile/UserProfile/UserProfile";
import OwnedNFTs from "../profile/OwnedNFTs/OwnedNFTs";
// import { getUserData, getOwnedNFTs } from "../utils/api";
import user from "../img/user-1.png";
import img from "../img/collection-img3.jpg";
import { ProfileBar } from "@/profile";
import { useRouter } from "next/router";
import NFTMarketplaceContext from "@/context/NFTMarketplace";
import { followNFT, getFollowedNFTs, getUser, unfollowNFT } from "@/utils/api";
import AddProfile from "@/profile/AddProfile/AddProfile";

function ProfilePage() {
  const { currentAccount, fetchMyNFTs, fetchNFTs } = useContext(
    NFTMarketplaceContext
  );
  const [nfts, setNFTS] = useState([]);
  const [ownedNFTs, setOwnedNFTs] = useState([]);
  const [createdNFTs, setCreatedNFTs] = useState([]);
  const [followingNFTs, setFollowingNFTs] = useState([]);

  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const loadNFTs = async () => {
      try {
        const fetchedNFTs = await fetchNFTs();
        setNFTS(fetchedNFTs);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      }
    };

    loadNFTs();
  }, [fetchNFTs]);

  useEffect(() => {
    fetchMyNFTs("listed").then((items) => {
      console.log("Owned NFTs fetched:", items);
      setOwnedNFTs(items);
    });
  }, []);

  useEffect(() => {
    fetchMyNFTs("created").then((items) => {
      console.log("Created NFTs fetched:", items);
      setCreatedNFTs(items);
    });
  }, []);

  console.log("Owned NFTs" + ownedNFTs);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await getUser(currentAccount);

        setUser(response);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    if (currentAccount) {
      fetchUserProfile();
    }
  }, [currentAccount]);

  useEffect(() => {
    const getData = async () => {
      const follows = await getFollowedNFTs(currentAccount);

      categorizeNFTs(nfts, follows);
    };
    getData();
  }, [currentAccount, nfts]);

  const categorizeNFTs = (nfts, follows) => {
    const followsSet = new Set(follows.map((follow) => follow.tokenId));

    const nftsWithCounts = nfts.map((nft) => ({
      ...nft,
      isFollowed: followsSet.has(nft.itemId.toString()),
    }));

    const following = nftsWithCounts.filter((nft) => nft.isFollowed); // NFTs from followed users

    setFollowingNFTs(following);
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
      categorizeNFTs(nfts, updatedFollows);
    } catch (error) {
      console.error("Error following/unfollowing NFT:", error);
      nft.isFollowed = originalFollowStatus; // Revert on failure
    }
  };

  const [likedNFTs, setNfts] = useState([
    {
      id: 1,
      title: "NFT Art #1",
      price: "0.5",
      likes: 20,
      isLiked: true,
      image: img,
    },
  ]);
  const handleToggleLike = (id) => {
    setNfts(
      likedNFTs.map((nft) => {
        if (nft.id === id) {
          return {
            ...nft,
            isLiked: !nft.isLiked,
            likes: nft.isLiked ? nft.likes - 1 : nft.likes + 1,
          };
        }
        return nft;
      })
    );
  };

  const handleUnfollow = (id) => {
    setFollowingNFTs(nfts.filter((nft) => nft.id !== id));
  };

  return (
    <div className="profile-page">
      <UserProfile user={user} />

      <ProfileBar
        ownedNFTs={ownedNFTs}
        createdNFTs={createdNFTs}
        likedNFTs={likedNFTs}
        onToggleLike={handleToggleLike}
        followingNFTs={followingNFTs}
        handleFollow={handleFollow}
        onUnfollow={handleUnfollow}
      />
    </div>
  );
}

export default ProfilePage;
