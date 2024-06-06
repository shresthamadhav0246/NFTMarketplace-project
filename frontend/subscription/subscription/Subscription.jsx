import React from "react";
import styles from "./Subscription.module.css";

const Subscription = ({ subscriptions }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Subscription Tiers</h2>
      <div className={styles.container_box}>
        {subscriptions.map((subscription, index) => (
          <div key={index} className={styles.tier}>
            {subscription.title == "Basic" && (
              <div className={styles.popular}>Popular</div>
            )}
            <div className={styles.header}>
              <h3 className={styles.tierTitle}>{subscription.title}</h3>
              <p className={styles.price}>{subscription.price}</p>
            </div>
            <ul className={styles.features}>
              {subscription.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className={styles.subscribeButton}>Subscribe</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
