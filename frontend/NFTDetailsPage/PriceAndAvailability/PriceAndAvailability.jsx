import React from "react";
import styles from "./PriceAndAvailability.module.css";

const PriceAndAvailability = ({
  nft,
  price,
  availability,
  buyNFT,
  currentAccount,
}) => {
  return (
    <div className={styles.priceContainer}>
      <h2 className={styles.title}>Price & Availability</h2>
      <p className={styles.price}>Price: {price}</p>
      {/* <p className={styles.availability}>Availability: {availability}</p> */}
      <div className={styles.actions}>
        {currentAccount == nft.seller.toLowerCase() ? (
          <p>You cann't buy your NFT.</p>
        ) : (
          <button className={styles.buyButton} onClick={() => buyNFT(nft)}>
            Buy Now
          </button>
        )}

        <button className={styles.cartButton}>Add to Cart</button>
      </div>
      {/* Additional pricing and availability details */}
    </div>
  );
};

export default PriceAndAvailability;
