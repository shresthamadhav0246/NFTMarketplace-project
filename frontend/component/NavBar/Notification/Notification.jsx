import React from "react";
import styles from "./Notification.module.css"; // Import the CSS module for styling

const Notification = () => {
  const notifications = [
    { message: "Your order has been shipped", timestamp: "10 minutes ago" },
    { message: "New login detected", timestamp: "1 hour ago" },
  ];

  if (!notifications.length) {
    return (
      <div className={styles.container}>
        <p className={styles.empty}>No new notifications</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {notifications.map((notification, index) => (
          <li key={index} className={styles.item}>
            <p className={styles.message}>{notification.message}</p>
            <p className={styles.timestamp}>{notification.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
