import React, { useState } from "react";
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar3,
} from "react-icons/bs";

import styles from "./ProfileBar.module.css";

import OwnedNFTs from "../OwnedNFTs/OwnedNFTs";
import CreatedNFTs from "../CreateNFTs/CreatedNFTs";
import LikedNFTs from "../LikedNFTs/LikedNFTs";
import { FollowingNFTs } from "..";

const ProfileBar = ({
  ownedNFTs,
  resell,
  createdNFTs,
  likedNFTs,
  onToggleLike,
  followingNFTs,
  onUnFollow,
  handleFollow,
}) => {
  const [collectibles, setCollectibles] = useState(true);
  const [created, setCreated] = useState(false);
  const [liked, setLiked] = useState(false);
  const [following, setFollowing] = useState(false);

  const collectiblesArray = [1, 2, 3, 4, 5, 6];

  const openCollectibles = () => {
    setCollectibles(true);
    setCreated(false);
    setLiked(false);
    setFollowing(false);
  };

  const openCreated = () => {
    setCollectibles(false);
    setCreated(true);
    setLiked(false);
    setFollowing(false);
  };

  const openLiked = () => {
    setCollectibles(false);
    setCreated(false);
    setLiked(true);
    setFollowing(false);
  };

  const openFollowing = () => {
    setCollectibles(false);
    setCreated(false);
    setLiked(false);
    setFollowing(true);
  };

  return (
    <div className={styles.collection}>
      <div className={styles.collection_title}>
        <h2>My NFT Collections</h2>

        <div className={styles.collection_collections}>
          <div className={styles.collection_collections_btn}>
            <button
              onClick={openCollectibles}
              className={collectibles ? styles.activeButton : ""}
            >
              <BsFillAlarmFill
                className={styles.collection_collections_btn_icon}
              />{" "}
              Collectibles
            </button>
            <button
              onClick={openCreated}
              className={created ? styles.activeButton : ""}
            >
              <BsCalendar3 className={styles.collection_collections_btn_icon} />{" "}
              Created
            </button>

            <button
              onClick={openFollowing}
              className={following ? styles.activeButton : ""}
            >
              <BsCalendar3 className={styles.collection_collections_btn_icon} />{" "}
              Following
            </button>
          </div>
        </div>
      </div>

      {collectibles && (
        <div className={styles.collection_box}>
          <OwnedNFTs nfts={ownedNFTs} />
        </div>
      )}

      {created && (
        <div className={styles.collection_box}>
          <CreatedNFTs nfts={createdNFTs} />
        </div>
      )}

      {following && (
        <div className={styles.collection_box}>
          <FollowingNFTs
            nfts={followingNFTs}
            onUnfollow={onUnFollow}
            handleFollow={handleFollow}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileBar;
