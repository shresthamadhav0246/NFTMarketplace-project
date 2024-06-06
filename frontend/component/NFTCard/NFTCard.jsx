// components/NFTCard.js

import React from "react";
import styles from "./NFTCard.module.css"; // Import CSS module for styling
import styled from "styled-components";

const NFTCard = ({ title, description, imageSrc, price }) => {
  const Card = styled.div`
    background-color: ${({ theme }) => theme.cardBg};
    color: ${({ theme }) => theme.text};

    padding: 20px;
  `;

  return (
    <div className={styles.nftCard}>
      <div className={styles.nftImage}>
        <img src={imageSrc} alt="NFT Image" />
      </div>
      <div className={styles.nftInfo}>
        <h2 className={styles.nftTitle}>{title}</h2>
        <p className={styles.nftDescription}>{description}</p>
        <p className={styles.nftPrice}>Price: {price}</p>
        <div className={styles.nftActions}>
          <button className={styles.actionButton}>Like</button>
          <button className={styles.actionButton}>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
