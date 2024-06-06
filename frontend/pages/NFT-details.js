import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/NFTDetails.module.css";
import NFTDetailsComponent from "@/NFTDetailsPage/NFTDetails";
import img from "../img/collection-img3.jpg";
import { useRouter } from "next/router";
import { getUser } from "@/utils/api";
import NFTMarketplaceContext from "@/context/NFTMarketplace";

const NFTDetails = () => {
  const router = useRouter();
  const { id, data } = router.query;
  const [nft, setNft] = useState("");
  const [artistDetails, setArtistDetails] = useState("");
  const { buyNFT } = useContext(NFTMarketplaceContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data) {
      const nftData = JSON.parse(decodeURIComponent(data));
      setNft(nftData);
    }
  }, [data]);

  useEffect(() => {
    const fetchArtistDetails = async () => {
      try {
        const response = await getUser(nft.seller.toLowerCase());

        setArtistDetails(response);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
      }
    };

    if (nft.seller) {
      fetchArtistDetails();
    }
  }, [nft.seller]);

  const handleBuyNFT = async () => {
    setLoading(true); // Set loading state to true before buyNFT function call
    try {
      await buyNFT(nft); // Assuming buyNFT function takes an NFT id as a parameter
      // Transaction successful, perform any necessary actions
    } catch (error) {
      console.error("Error buying NFT:", error);
      // Handle error case
    } finally {
      setLoading(false); // Reset loading state after transaction is complete
    }
  };

  if (!nft) {
    return <div>Loading...</div>;
  }

  // const nftData = {
  //   imageUrl: img,
  //   title: "Unique Digital Art",
  //   artist: "Artist Name",
  //   description: "Detailed description of the NFT artwork...",
  //   edition: "1 of 10",
  //   creationDate: "2021-09-01",
  //   artistName: "Artist Name",
  //   artistBio: "Brief biography of the artist...",
  //   artistPortfolioLink: "https://artistportfolio.com",
  //   artistSocialLinks: [
  //     {
  //       twitter: "https://twitter.com/artist",
  //       instagram: "https://instagram.com/artist",
  //     },
  //   ],
  //   price: "3 ETH",
  //   availability: "Available",
  //   comments: [
  //     { username: "user1", comment: "This is amazing!" },
  //     { username: "User 2", comment: "Great product" },
  //   ],
  //   shareOptions: [{ twitter: true, facebook: true }],
  //   relatedNFTs: [
  //     {
  //       id: 1,
  //       title: "Related Art #1",
  //       imageUrl: img,
  //     },
  //     {
  //       id: 2,
  //       title: "Related Art #2",
  //       imageUrl: img,
  //     },
  //   ],
  // };

  return (
    <div>
      <NFTDetailsComponent
        nft={nft}
        artistDetails={artistDetails}
        buyNFT={handleBuyNFT}
        loading={loading}
      />
    </div>
  );
};

export default NFTDetails;
