import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./HeroSection.module.css"; // Ensure this CSS module exists
import hero from "../../img/hero.png";
import styled from "styled-components";
const Hero = () => {
  const Hero = styled.header`
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  `;

  // const buttonStyle = {
  //   backgroundColor: "red",
  //   color: "red",
  //   border: "1px solid",
  //   padding: "10px 20px",
  //   cursor: "pointer",
  // };

  return (
    <Hero>
      <div className={styles.hero}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Discover, Collect, and Sell Extraordinary NFTs
          </h1>
          <p className={styles.description}>
            Welcome to the premier marketplace for NFTs, featuring incredible
            digital art from artists around the world.
          </p>
          <div className={styles.buttons}>
            <Link href="/NFT-upload" className={styles.button}>
              Create Collection
            </Link>
            <Link href="/collection" className={styles.button}>
              Explore Now
            </Link>
          </div>
        </div>
        <div className={styles.imageContent}>
          <Image src={hero} alt="NFT Collection" width={500} height={300} />
        </div>
      </div>
    </Hero>
  );
};

export default Hero;
