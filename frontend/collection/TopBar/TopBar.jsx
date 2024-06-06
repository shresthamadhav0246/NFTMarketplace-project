import React from "react";
import { IoMdGrid, IoMdList, IoIosApps } from "react-icons/io";
import styles from "./TopBar.module.css"; // Import the CSS module
import styled from "styled-components";

const Header = styled.header`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
`;

const Select = styled.select`
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
`;

export default function TopBar({ onSearch, onSort, onViewChange }) {
  return (
    <Header>
      <div className={styles.topBar}>
        <Input
          type="text"
          placeholder="Search NFTs..."
          onChange={(e) => onSearch(e.target.value)}
          className={styles.input}
        />
        <Select
          onChange={(e) => onSort(e.target.value)}
          className={styles.select}
        >
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
        </Select>
        <div className={styles.viewOptions}>
          <button onClick={() => onViewChange("grid")}>
            <IoMdGrid size="1.5em" />
          </button>
          <button onClick={() => onViewChange("list")}>
            <IoMdList size="1.5em" />
          </button>
          <button onClick={() => onViewChange("small")}>
            <IoIosApps size="1.5em" />
          </button>
        </div>
      </div>
    </Header>
  );
}
