import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import styles from "../styles/NFTUpload.module.css"; // Ensure correct path
import NFTMarketplaceContext from "@/context/NFTMarketplace"; // Ensure correct path to context
import { Loader } from "@/component";
import styled from "styled-components";

const NFTUploadPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [artworkFile, setArtworkFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [editionSize, setEditionSize] = useState("");
  const [royaltyPercentage, setRoyaltyPercentage] = useState("");
  const [price, setPrice] = useState("");
  const [availability, setAvailability] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  const { createNFT } = useContext(NFTMarketplaceContext);
  const router = useRouter();

  const validateInput = () => {
    const errors = {};
    if (!title) errors.title = "This field is required";
    if (!description) errors.description = "This field is required";
    if (!artworkFile) errors.artworkFile = "This field is required";
    if (!category) errors.category = "This field is required";
    if (!tags) errors.tags = "This field is required";
    if (!editionSize) errors.editionSize = "This field is required";
    if (!royaltyPercentage) errors.royaltyPercentage = "This field is required";
    if (!price) errors.price = "This field is required";
    if (!availability) errors.availability = "This field is required";
    if (!termsAccepted)
      errors.termsAccepted = "Please accept the terms and conditions";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleUpload = async () => {
    try {
      setLoading(true);
      const formInput = {
        name: title,
        description,
        price,
        category,
        tags,
        editionSize,
      };
      await createNFT(formInput, artworkFile, router);
    } catch (error) {
      console.error("Error uploading NFT:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setArtworkFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateInput();
    if (isValid) {
      handleUpload();
    }
  };

  return (
    <div className={styles.uploadContainer}>
      <h1 className={styles.header}>Upload NFT</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.column}>
          <div className={styles.step}>
            <h2>Step 1: Upload Artwork</h2>
            <div className={styles.formGroup}>
              <label>Artwork File</label>
              <div className={styles.dragDropArea}>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className={styles.inputFile}
                />
                <p>Drag & drop your file here, or click to select</p>
              </div>
              {previewUrl && (
                <img
                  src={previewUrl}
                  alt="Artwork Preview"
                  className={styles.previewImage}
                />
              )}
              {errors.artworkFile && (
                <p className={styles.errorMessage}>{errors.artworkFile}</p>
              )}
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.step}>
            <h2>Step 2: Enter Details</h2>
            <div className={styles.formGroup}>
              <label>Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`${styles.input} ${
                  errors.title ? styles.error : ""
                }`}
              />
              {errors.title && (
                <p className={styles.errorMessage}>{errors.title}</p>
              )}
            </div>
            <div className={styles.formGroup}>
              <label>Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={`${styles.textarea} ${
                  errors.description ? styles.error : ""
                }`}
              />
              {errors.description && (
                <p className={styles.errorMessage}>{errors.description}</p>
              )}
            </div>
            <div className={styles.formGroup}>
              <label>Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={`${styles.input} ${
                  errors.category ? styles.error : ""
                }`}
              >
                <option value="">Select a category</option>
                <option value="Art">Art</option>
                <option value="Collectibles">Collectibles</option>
                <option value="Gaming">Gaming</option>
                <option value="Music">Music</option>
                <option value="Sports">Sports</option>
              </select>
              {errors.category && (
                <p className={styles.errorMessage}>{errors.category}</p>
              )}
            </div>
            <div className={styles.formGroup}>
              <label>Tags</label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className={`${styles.input} ${errors.tags ? styles.error : ""}`}
              />
              {errors.tags && (
                <p className={styles.errorMessage}>{errors.tags}</p>
              )}
            </div>
            {loading && <Loader />}
            <div className={styles.formGroup}>
              <label>Edition Size</label>
              <input
                type="number"
                value={editionSize}
                onChange={(e) => setEditionSize(e.target.value)}
                className={`${styles.input} ${
                  errors.editionSize ? styles.error : ""
                }`}
              />
              {errors.editionSize && (
                <p className={styles.errorMessage}>{errors.editionSize}</p>
              )}
            </div>
            <div className={styles.formGroup}>
              <label>Royalty Percentage (%)</label>
              <input
                type="number"
                value={royaltyPercentage}
                onChange={(e) => setRoyaltyPercentage(e.target.value)}
                className={`${styles.input} ${
                  errors.royaltyPercentage ? styles.error : ""
                }`}
              />
              {errors.royaltyPercentage && (
                <p className={styles.errorMessage}>
                  {errors.royaltyPercentage}
                </p>
              )}
            </div>
            <div className={styles.formGroup}>
              <label>Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className={`${styles.input} ${
                  errors.price ? styles.error : ""
                }`}
              />
              {errors.price && (
                <p className={styles.errorMessage}>{errors.price}</p>
              )}
            </div>
            <div className={styles.formGroup}>
              <label>Availability</label>
              <input
                type="text"
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                className={`${styles.input} ${
                  errors.availability ? styles.error : ""
                }`}
              />
              {errors.availability && (
                <p className={styles.errorMessage}>{errors.availability}</p>
              )}
            </div>
          </div>
        </div>

        <div className={styles.fullWidthStep}>
          <h2>Step 3: Confirm and Upload</h2>
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className={`${styles.checkbox} ${
                errors.termsAccepted ? styles.error : ""
              }`}
            />
            <label>Accept Terms and Conditions {"  "}</label>
            {errors.termsAccepted && (
              <p className={styles.errorMessage}>{errors.termsAccepted}</p>
            )}
          </div>
          <button type="submit" className={styles.submitButton}>
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default NFTUploadPage;
