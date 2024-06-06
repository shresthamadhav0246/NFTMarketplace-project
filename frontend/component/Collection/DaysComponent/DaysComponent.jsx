import React, { useState } from "react";
import Image from "next/image";
import styles from "./DaysComponent.module.css";
import img1 from "../../../img/collection-img1.jpg";
import img2 from "../../../img/collection-img2.jpg";
import img3 from "../../../img/collection-img3.jpg";
import img4 from "../../../img/collection-img4.jpg";
import userProfileImage5 from "../../../img/user-1.png";
import { MdVerified } from "react-icons/md";
import styled from "styled-components";

const DaysComponent = () => {
  // Placeholder paths for images, replace with actual image paths
  const backgroundImage = img1;
  const bottomImages = [img2, img3];
  const userProfileImage = userProfileImage5;

  const [showAdditionalImages, setShowAdditionalImages] = useState(false);

  const handleShowMoreImages = () => {
    setShowAdditionalImages(!showAdditionalImages);
  };

  const Card = styled.div`
    background-color: ${({ theme }) => theme.cardBg};
    color: ${({ theme }) => theme.text};
  `;

  return (
    <div className={styles.daysComponent}>
      <div className={styles.backgroundImage}>
        <Image
          src={backgroundImage}
          alt="Main background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.bottomImages}>
        {bottomImages.map((img, index) => (
          <div key={index} className={styles.smallImage}>
            <Image
              src={img}
              alt={`Small image ${index + 1}`}
              width={100}
              height={100}
            />
          </div>
        ))}
        <div className={styles.smallImage} onClick={handleShowMoreImages}>
          <Image
            src={img4}
            alt="Small image 3"
            layout="fill"
            objectFit="cover"
          />
          <div className={styles.plusSign}>+</div>
        </div>
      </div>
      <Card>
        <div className={styles.info}>
          <h4>Collection Title</h4>
          <div className={styles.profile}>
            <div className={styles.profileImage}>
              <Image
                src={userProfileImage}
                alt="Profile"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className={styles.profileName}>
              Madhab Shrestha <MdVerified className={styles.verifiedIcon} />
            </div>
          </div>
          {/* <p>2.5 ETH</p> */}
        </div>
      </Card>
    </div>
  );
};

export default DaysComponent;
