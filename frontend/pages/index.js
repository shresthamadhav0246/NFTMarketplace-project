import React, { useEffect, useState, useContext } from "react";
import Head from "next/head";
import {
  HeroSection,
  ServiceSection,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  Follower,
  Footer,
  Loader,
  LineSeparator,
} from "../component/index";

import NFTMarketplaceContext from "@/context/NFTMarketplace"; // Ensure correct path

export default function Home() {
  const { fetchNFTs, checkIfWalletConnected } = useContext(
    NFTMarketplaceContext
  );
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredNFTs = nfts.filter((nft) => {
    // Filter by category (case-insensitive)
    if (
      selectedCategory &&
      nft.category.toLowerCase() !== selectedCategory.toLowerCase()
    ) {
      return false;
    }
    return true;
  });

  console.log(selectedCategory, filteredNFTs);

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  useEffect(() => {
    const loadNFTs = async () => {
      try {
        const fetchedNFTs = await fetchNFTs();
        setNfts(fetchedNFTs);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadNFTs();
  }, [fetchNFTs]);

  console.log(nfts);

  return (
    <>
      <Head>
        <title>My NFT Marketplace</title>
      </Head>
      <HeroSection />
      <ServiceSection />

      <Title
        heading="Explore NFTs"
        paragraph="Browse through a diverse collection of NFTs across various categories"
      />

      <Filter
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />

      {nfts.length == 0 ? <Loader /> : <NFTCard nfts={filteredNFTs} />}

      <Title
        heading="Filter by Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />
      <Follower nfts={nfts} />
      {/* <Collection /> */}

      {/* <Title
        heading="Browse by category"
        paragraph="It's a category paragraph. user can get products by category"
      />
      <Category /> */}
      <LineSeparator color="#d3d3d3" />
      <Subscribe />
    </>
  );
}
