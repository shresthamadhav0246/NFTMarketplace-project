// Menu.js
import React from "react";
import styles from "./Menu.module.css"; // Import the appropriate CSS module
import Link from "next/link";

const Menu = ({ setShowMenu }) => {
  return (
    <div className={styles.menuItems}>
      <div className={styles.discover}>
        <Link href="/discover">Discover</Link>
      </div>
      <div className={styles.inputBox}>
        <input type="text" placeholder="Search" />
      </div>
      <div className={styles.help}>
        <Link href="/help">Help Cent</Link>
      </div>
      <button onClick={() => setShowMenu(false)} className={styles.closeBtn}>
        Close
      </button>
    </div>
  );
};

export default Menu;
