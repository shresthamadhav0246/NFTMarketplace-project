// components/UserProfile.js
import React from "react";
import styles from "./UserProfile.module.css"; // Ensure this path matches your file structure
import { MdVerified } from "react-icons/md"; // For the verified icon
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; // Social media icons
import userImage from "../../img/user-1.png";
import Image from "next/image";
import { FiEdit } from "react-icons/fi";
import { useRouter } from "next/router";
import AddProfile from "../AddProfile/AddProfile";

const UserProfile = ({ user }) => {
  const router = useRouter();

  const handleEditProfile = () => {
    router.push("/edit-profile");
  };

  // Check if the user object is null or if any critical profile field is missing
  const isProfileIncomplete =
    !user || !user.username || !user.email || !user.bio || !user.profilePicture;

  if (isProfileIncomplete) {
    return <AddProfile />;
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileImageContainer}>
        <Image
          src={user.profilePicture || userImage}
          alt="Profile"
          width={100}
          height={100}
          className={styles.profileImage}
        />
      </div>
      <div className={styles.profileInfo}>
        <h2 className={styles.profileName}>
          {user.username || "Anonymous User"}
          {user.isVerified && <MdVerified className={styles.verifiedIcon} />}
        </h2>
        <p className={styles.profileEmail}>
          {user.email || "No email provided"}
        </p>
        <p>{user.bio || "No biography provided"}</p>
        <div className={styles.socialMediaIcons}>
          <a href={user.twitter} className={styles.icon}>
            <FaTwitter />
          </a>
          <a href={user.facebook} className={styles.icon}>
            <FaFacebook />
          </a>
          <a href={user.instagram} className={styles.icon}>
            <FaInstagram />
          </a>
          <a href={user.linkedin} className={styles.icon}>
            <FaLinkedin />
          </a>
        </div>
      </div>
      <FiEdit
        className={styles.editIcon}
        size={24}
        onClick={handleEditProfile}
      />
    </div>
  );
};

export default UserProfile;
