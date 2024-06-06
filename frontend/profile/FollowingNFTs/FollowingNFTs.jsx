// components/FollowingNFTs.js
import React from "react";
import styles from "./FollowingNFTs.module.css"; // Ensure to create or link appropriate CSS
import Image from "next/image";
import { AiOutlineMinusCircle } from "react-icons/ai"; // Icon for unfollowing
import styled from "styled-components";

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
`;

const FollowingNFTs = ({ nfts, onUnfollow, handleFollow }) => {
  if (!nfts.length) {
    return <div className={styles.empty}>No NFTs followed yet.</div>;
  }

  return (
    <div className={styles.nftsContainer}>
      {nfts.map((nft) => (
        <div key={nft.id} className={styles.nftCard}>
          <Image
            width={100}
            height={100}
            src={nft.image}
            alt={nft.title}
            className={styles.nftImage}
          />
          <Card>
            <div className={styles.nftDetails}>
              <h3 className={styles.nftTitle}>{nft.name}</h3>
              <p className={styles.nftPrice}>{`Price: ${nft.price} ETH`}</p>
              <button
                className={styles.unfollowButton}
                onClick={() => handleFollow(nft)}
              >
                <AiOutlineMinusCircle /> Unfollow
              </button>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default FollowingNFTs;
