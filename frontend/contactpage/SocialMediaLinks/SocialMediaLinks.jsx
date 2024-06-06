import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import styles from "./SocaiMediaLinks.module.css"; // Ensure the correct path
import styled from "styled-components";

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
`;

function SocialMediaLinks() {
  return (
    <div className={styles.socialLinks}>
      <a href="https://twitter.com/yourhandle" className={styles.iconLink}>
        <FaTwitter className={styles.icon} />
      </a>
      <a href="https://facebook.com/yourpage" className={styles.iconLink}>
        <FaFacebookF className={styles.icon} />
      </a>
      <a href="https://linkedin.com/in/yourprofile" className={styles.iconLink}>
        <FaLinkedinIn className={styles.icon} />
      </a>
    </div>
  );
}

export default SocialMediaLinks;
