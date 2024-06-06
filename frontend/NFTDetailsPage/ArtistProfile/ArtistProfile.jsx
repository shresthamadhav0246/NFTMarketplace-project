import React from "react";
import styles from "./ArtistProfile.module.css";

const ArtistProfile = ({ name, bio, email }) => {
  return (
    <div className={styles.profileContainer}>
      <h2 className={styles.profileTitle}>Artist Profile</h2>
      <p className={styles.profileDetails}>Name: {name}</p>
      <p className={styles.profileDetails}>Email: {email}</p>
      <p className={styles.profileDetails}>Bio: {bio}</p>
      {/* <p className={styles.profileDetails}>
        Portfolio:{" "}
        <a href={portfolioLink} className={styles.profileLink}>
          {portfolioLink}
        </a>
      </p> */}
      {/* <div className={styles.profileSocialLinks}>
        <p>Social Media:</p>
        <ul>
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} className={styles.profileLink}>
                {link.twitter}
              </a>{" "}
              <a href={link.url} className={styles.profileLink}>
                {link.instagram}
              </a>
            </li>
          ))}
        </ul>
      </div> */}
      {/* Additional artist information */}
    </div>
  );
};

export default ArtistProfile;
