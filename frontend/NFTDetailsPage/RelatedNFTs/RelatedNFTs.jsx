import React from "react";
import Image from "next/image";
import styles from "./RelatedNFTs.module.css";

const RelatedNFTs = ({ relatedNFTs }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Related NFTs</h2>
      <div className={styles.grid}>
        {relatedNFTs.map((nft, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={nft.imageUrl}
              alt={nft.title}
              width={200}
              height={200}
              className={styles.image}
            />
            <div className={styles.info}>
              <p className={styles.name}>{nft.title}</p>
              <p className={styles.price}>{`${nft.price} ETH`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedNFTs;
