import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import logo from "../../../img/logo1.png";
import { Button } from "../../index";

import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import styles from "./SideBar.module.css"; // Import the CSS module for the sidebar
import { useRouter } from "next/router";

const SideBar = ({ setOpenSideMenu, currentAccount, connectWallet }) => {
  const router = useRouter();
  const [showDiscoverOptions, setShowDiscoverOptions] = useState(false);
  const [showHelpOptions, setShowHelpOptions] = useState(false);

  const handleCreate = () => {
    router.push("/NFT-upload");
    setOpenSideMenu(false);
  };
  return (
    <aside className={styles.sidebar}>
      <div className={styles.closeBtn}>
        <GrClose onClick={() => setOpenSideMenu(false)} />
      </div>
      <div className={styles.logo}>
        <Image src={logo} alt="Logo" width={100} height={100} />
      </div>
      <div className={styles.menu}>
        <div className={styles.menuItem}>
          <Link href="/discover" className={styles.link}>
            Discover
          </Link>
          <button
            onClick={() => setShowDiscoverOptions(!showDiscoverOptions)}
            className={styles.dropdownToggle}
          >
            {showDiscoverOptions ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </button>
          {showDiscoverOptions && (
            <div className={styles.dropdownMenu}>
              <Link href="/discover/new" className={styles.link}>
                New Releases
              </Link>
              <Link href="/discover/popular" className={styles.link}>
                Most Popular
              </Link>
            </div>
          )}
        </div>
        <div className={styles.menuItem}>
          <Link href="/help" className={styles.link}>
            Help Center
          </Link>
          <button
            onClick={() => setShowHelpOptions(!showHelpOptions)}
            className={styles.dropdownToggle}
          >
            {showHelpOptions ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </button>
          {showHelpOptions && (
            <div className={styles.dropdownMenu}>
              <Link href="/help/faq" className={styles.link}>
                FAQs
              </Link>
              <Link href="/help/contact" className={styles.link}>
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className={styles.sideBar_button}>
        {!currentAccount ? (
          <Button
            btnName="Connect Wallet"
            handleClick={() => connectWallet()}
          />
        ) : (
          <Button btnName="Create" handleClick={() => handleCreate()} />
        )}
      </div>

      <div className={styles.socialLinks}>
        <Link href="https://facebook.com" className={styles.icon}>
          <TiSocialFacebook />
        </Link>
        <Link href="https://linkedin.com" className={styles.icon}>
          <TiSocialLinkedin />
        </Link>
        <Link href="https://twitter.com" className={styles.icon}>
          <TiSocialTwitter />
        </Link>
        <Link href="https://youtube.com" className={styles.icon}>
          <TiSocialYoutube />
        </Link>
        <Link href="https://instagram.com" className={styles.icon}>
          <TiSocialInstagram />
        </Link>
      </div>
    </aside>
  );
};

export default SideBar;
