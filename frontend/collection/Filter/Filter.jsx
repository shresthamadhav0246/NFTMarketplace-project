import React, { useState } from "react";
import styles from "./Filter.module.css"; // Assuming CSS module usage
import styled from "styled-components";

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  height: 100vh;
`;

export default function Filter({ onFilterChange }) {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  return (
    <Card>
      <div className={styles.filterContainer}>
        <button
          className={`${styles.filterButton} ${
            selectedFilter === "all" ? styles.active : ""
          }`}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        <button
          className={`${styles.filterButton} ${
            selectedFilter === "popular" ? styles.active : ""
          }`}
          onClick={() => handleFilterChange("popular")}
        >
          Popular
        </button>
        <button
          className={`${styles.filterButton} ${
            selectedFilter === "following" ? styles.active : ""
          }`}
          onClick={() => handleFilterChange("following")}
        >
          Following
        </button>
      </div>
    </Card>
  );
}
