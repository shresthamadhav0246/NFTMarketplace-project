import React from "react";
import styles from "./ArtworkInfo.module.css";

const ArtworkInfo = ({ title, artist, description, edition, creationDate }) => {
  return (
    <div className={styles.infoContainer}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.artist}>Artist: {artist}</p>

      <p className={styles.edition}>Edition: 2</p>
      {/* <p className={styles.creationDate}>Creation Date: {creationDate}</p> */}
      {/* Additional artwork information */}
    </div>
  );
};

export default ArtworkInfo;
