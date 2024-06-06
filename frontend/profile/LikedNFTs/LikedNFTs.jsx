// components/LikedNFTs.js
import React from "react";
import styles from "./LikedNFTs.module.css"; // You can reuse OwnedNFTs.css or create a new style
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"; // For like/unlike icons

const LikedNFTs = ({ nfts, onToggleLike }) => {
  if (!nfts.length) {
    return <div className={styles.empty}>No NFTs liked yet.</div>;
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
          <div className={styles.nftDetails}>
            <h3 className={styles.nftTitle}>{nft.title}</h3>
            <p className={styles.nftPrice}>{`Price: ${nft.price} ETH`}</p>
            <button
              className={styles.likeButton}
              onClick={() => onToggleLike(nft.id)}
            >
              {nft.isLiked ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
            </button>
            <p className={styles.likeCount}>{`${nft.likes} likes`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LikedNFTs;
