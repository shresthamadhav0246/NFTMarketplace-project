// components/CreatedNFTs.js
import React from "react";
import styles from "./CreatedNFTs.module.css"; // Ensure the CSS file is appropriately named or reused
import Image from "next/image";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
`;

const CreatedNFTs = ({ nfts = [] }) => {
  if (!nfts.length) {
    return <div className={styles.empty}>No NFTs created yet.</div>;
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
              <p className={styles.nftExtra}>{`Created on: June 2024`}</p>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CreatedNFTs;
