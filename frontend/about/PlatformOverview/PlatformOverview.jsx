import React from "react";
import styles from "./PlatformOverview.module.css"; // Ensure the path to the CSS file is correct

function PlatformOverview() {
  return (
    <div className={styles.container}>
      <h2>Platform Overview</h2>
      <p>
        Our NFT marketplace is dedicated to empowering artists and collectors
        through the power of blockchain technology. We focus on innovation,
        security, and user experience to provide a unique platform for digital
        art transactions.
      </p>
      <p>
        Key features include AR previews of NFTs, direct artist-to-collector
        sales, and an educational hub for newcomers to the NFT space.
      </p>
    </div>
  );
}

export default PlatformOverview;
