import React, { useContext } from "react";
import {
  ArtworkDisplay,
  ArtworkInfo,
  ArtistProfile,
  PriceAndAvailability,
  InteractiveFeatures,
  RelatedNFTs,
} from "./index";
import NFTMarketplaceContext from "@/context/NFTMarketplace";

import styles from "./NFTDetails.module.css";
import styled from "styled-components";
import { Loader } from "@/component";

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  font-size: 16px;

  line-height: 1.6;
  text-align: justify;
  margin-top: 20px;

  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
`;
const InfoCard = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  margin-top: 10px;
`;

const NFTDetails = ({ nft, artistDetails, buyNFT, loading }) => {
  const artistSocialLinks = ["Facebook", "Twitter, Instragram"];
  const comments = ["It is good product", "I like it"];
  const shareOptions = ["It is good product", "I like it"];
  const { currentAccount } = useContext(NFTMarketplaceContext);

  return (
    <div className={styles.nftDetailsContainer}>
      <div className={styles.leftColumn}>
        <ArtworkDisplay imageUrl={nft.image} altText={nft.name} />
        <Card>
          <p className={styles.artworkDescription}>{nft.description}</p>
        </Card>
      </div>

      <div className={styles.rightColumn}>
        <InfoCard>
          <ArtworkInfo
            title={nft.name}
            artist={nft.seller}
            edition={nft.edition}
            creationDate={nft.creationDate}
          />
        </InfoCard>
        <InfoCard>
          <ArtistProfile
            name={artistDetails.username || "No Username"}
            email={artistDetails.email || "NO Email"}
            bio={artistDetails.bio || "No Bio"}
            // portfolioLink={nft.artistPortfolioLink}
            // socialLinks={artistSocialLinks}
          />
        </InfoCard>
        {loading && <Loader />}
        <InfoCard>
          <PriceAndAvailability
            nft={nft}
            price={nft.price}
            availability={nft.availability}
            buyNFT={buyNFT}
            currentAccount={currentAccount}
          />
        </InfoCard>
        <InfoCard>
          <InteractiveFeatures
            shareOptions={shareOptions}
            tokenId={nft.itemId}
            walletAddress={currentAccount}
          />
        </InfoCard>
      </div>
      {/* <div className={styles.relatedNFTsContainer}>
        <RelatedNFTs relatedNFTs={nft.relatedNFTs} />
      </div> */}
    </div>
  );
};

export default NFTDetails;
