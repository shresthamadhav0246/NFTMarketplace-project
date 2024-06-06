// components/AddProfile.js
import React, { useContext, useEffect, useState } from "react";
import styles from "./AddProfile.module.css";
import { useRouter } from "next/router";
import { createUser } from "@/utils/api";
import NFTMarketplaceContext from "@/context/NFTMarketplace";
import styled from "styled-components";

const AddProfile = () => {
  const { currentAccount } = useContext(NFTMarketplaceContext);
  console.log(currentAccount);
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    walletAddress: "",
    profilePicture: "",
    bio: "",
  });

  // Update the walletAddress when currentAccount changes
  useEffect(() => {
    if (currentAccount) {
      setProfile((prevProfile) => ({
        ...prevProfile,
        walletAddress: currentAccount,
      }));
    }
  }, [currentAccount]);

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file" && files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    } else {
      setProfile({ ...profile, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(profile);
      router.replace(router.asPath); // Redirect to profile page after saving
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className={styles.addProfileContainer}>
      <h2 className={styles.title}>Create Your Profile</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.label}>
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={profile.username}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="bio" className={styles.label}>
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            required
            className={styles.textarea}
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="profilePicture" className={styles.label}>
            Profile Picture
          </label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            onChange={handleChange}
            className={styles.fileInput}
          />
          {profile.profilePicture && (
            <img
              src={profile.profilePicture}
              alt="Profile Preview"
              className={styles.profileImagePreview}
            />
          )}
        </div>
        <button type="submit" className={styles.saveButton}>
          Save
        </button>
      </form>
    </div>
  );
};

export default AddProfile;
