import Image from "next/image";
import React from "react";
import styles from "./ArtworkDisplay.module.css";

const ArtworkDisplay = ({ imageUrl, altText }) => {
  return (
    <div className={styles.artworkContainer}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          alt={altText}
          layout="responsive"
          width={400}
          height={500}
          className={styles.artworkImage}
        />
      </div>
    </div>
  );
};

export default ArtworkDisplay;
