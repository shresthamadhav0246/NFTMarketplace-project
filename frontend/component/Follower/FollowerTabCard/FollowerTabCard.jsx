import React from "react";
import Image from "next/image";
import styles from "./FollowerTabCard.module.css";
import { useRouter } from "next/router";
import styled from "styled-components";

const FollowerTabCard = ({ nft, onFollow }) => {
  const router = useRouter();
  const nftDetails = () => {
    const nftData = encodeURIComponent(JSON.stringify(nft));
    router.push(`/NFT-details?id=${nft.itemId}&data=${nftData}`);
  };

  const Card = styled.div`
    background-color: ${({ theme }) => theme.cardBg};
    color: ${({ theme }) => theme.text};
  `;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer} onClick={nftDetails}>
        <Image
          src={nft.image}
          alt={nft.name}
          width={500}
          height={300}
          className={styles.imageContainer_image}
        />
      </div>
      <Card>
        <div className={styles.info}>
          <h4>{nft.name}</h4>
          <p>{nft.price} ETH</p>
          <div className={styles.meta}>
            <span>
              Creator: {`${nft.seller.slice(0, 7)}....${nft.seller.slice(-5)}`}
            </span>

            {nft.isFollowed ? (
              <button className={styles.unfollow} onClick={onFollow}>
                Unfollow
              </button>
            ) : (
              <button className={styles.follow} onClick={onFollow}>
                Follow
              </button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FollowerTabCard;
