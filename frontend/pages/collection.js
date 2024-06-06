import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/collection.module.css";
import { Filter, TopBar } from "@/collection"; // Adjust the import path as needed
import { Loader, NFTCard } from "@/component"; // Adjust the import path as needed
import NFTMarketplaceContext from "@/context/NFTMarketplace";
import { useRouter } from "next/router";
import styled from "styled-components";
import Head from "next/head";

function CollectionPage() {
  const { fetchNFTs } = useContext(NFTMarketplaceContext);

  const [currentFilter, setCurrentFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("price-low-high");
  const [view, setView] = useState("grid");
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const searchQueryFromURL = router.query.search || "";
    setSearchQuery(searchQueryFromURL);
  }, [router.query.search, setSearchQuery]);

  useEffect(() => {
    const getNFTs = async () => {
      setLoading(true); // Start loading
      try {
        const response = await fetchNFTs();
        setNfts(response);
      } catch (error) {
        console.error("Failed to fetch NFTs:", error);
      } finally {
        setLoading(false); // End loading
      }
    };

    getNFTs();
  }, []);

  const handleFilterChange = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const handleViewChange = (viewType) => {
    setView(viewType);
  };

  // Filter and sort NFTs based on user input
  const filteredNFTs = nfts
    .filter((nft) => {
      if (currentFilter === "all") return true;
      if (currentFilter === "popular") return true; // Adjust this condition for real popular logic
      if (currentFilter === "following") return true; // Adjust this condition for real following logic
      return false;
    })
    .filter((nft) => nft.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "price-low-high")
        return parseFloat(a.price) - parseFloat(b.price);
      if (sortOrder === "price-high-low")
        return parseFloat(b.price) - parseFloat(a.price);
      return 0;
    });

  console.log(nfts);
  console.log(filteredNFTs);
  return (
    <div className={styles.collectionPage}>
      <div className={styles.sideBar}>
        <Filter onFilterChange={handleFilterChange} />
      </div>
      <div className={styles.mainContent}>
        <div className={styles.topBar}>
          <TopBar
            onSearch={handleSearchChange}
            onSort={handleSortChange}
            onViewChange={handleViewChange}
          />
        </div>
        <div className={`${styles.collectionBox} ${styles[view]}`}>
          {loading ? <Loader /> : <NFTCard nfts={filteredNFTs} />}
        </div>
      </div>
    </div>
  );
}

export default CollectionPage;
