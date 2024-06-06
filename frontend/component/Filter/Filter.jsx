import React, { useState } from "react";
import styles from "./Filter.module.css";

import {
  FaFilter,
  FaAngleDown,
  FaAngleUp,
  FaWallet,
  FaMusic,
  FaUserAlt,
  FaImages,
  FaVideo,
} from "react-icons/fa";

import { AiFillCloseCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import styled from "styled-components";

const Filter = ({ handleCategoryChange = { handleCategoryChange } }) => {
  const [filter, setFilter] = useState(true);
  const [collectibles, setCollectibles] = useState();
  const [image, setImage] = useState(true);
  const [video, setVideo] = useState(true);
  const [music, setMusic] = useState(true);

  const openFilter = () => {
    if (!filter) {
      setFilter(true);
    } else {
      setFilter(false);
    }
  };

  const openImage = () => {
    if (!image) {
      setImage(true);
    } else {
      setImage(false);
    }
  };

  const openMusic = () => {
    if (!music) {
      setMusic(true);
    } else {
      setMusic(false);
    }
  };

  const openVideo = () => {
    if (!video) {
      setVideo(true);
    } else {
      setVideo(false);
    }
  };

  const Filter = styled.header`
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  `;

  return (
    <Filter>
      <div className={styles.filter}>
        <div className={styles.filter_box}>
          <div className={styles.filter_box_left}>
            <button onClick={() => handleCategoryChange("")}>All</button>
            <button onClick={() => handleCategoryChange("arts")}>Arts</button>
            <button onClick={() => handleCategoryChange("collectibles")}>
              Collectibles
            </button>
            <button onClick={() => handleCategoryChange("gaming")}>
              Gaming
            </button>
            <button onClick={() => handleCategoryChange("sports")}>
              Sports
            </button>
            <button onClick={() => handleCategoryChange("music")}>Music</button>
          </div>

          <div className={styles.filter_box_right}>
            <div
              className={styles.filter_box_right_box}
              onClick={() => openFilter()}
            >
              <FaFilter />
              <span>Filter</span> {filter ? <FaAngleDown /> : <FaAngleUp />}
            </div>
          </div>
        </div>
        {filter && (
          <div className={styles.filter_box_items}>
            <div className={styles.filter_box_items_box}>
              <div className={styles.filter_box_items_box_item}>
                <FaWallet /> <span>0.001 ETH - 10 ETH</span>
                <AiFillCloseCircle />
              </div>
            </div>

            <div className={styles.filter_box_items_box}>
              <div
                className={styles.filter_box_items_box_item_transection}
                onClick={() => openImage()}
              >
                <FaImages /> <small>Images</small>
                {image ? <AiFillCloseCircle /> : <TiTick />}
              </div>
            </div>

            <div className={styles.filter_box_items_box}>
              <div
                className={styles.filter_box_items_box_item_transection}
                onClick={() => openVideo()}
              >
                <FaVideo /> <small>Videos</small>
                {video ? <AiFillCloseCircle /> : <TiTick />}
              </div>
            </div>
            <div className={styles.filter_box_items_box}>
              <div
                className={styles.filter_box_items_box_item_transection}
                onClick={() => openMusic()}
              >
                <FaMusic /> <small>Musics</small>
                {music ? <AiFillCloseCircle /> : <TiTick />}
              </div>
            </div>

            <div className={styles.filter_box_items_box}>
              <FaUserAlt /> <span>Verified</span>
              <MdVerified />
            </div>
          </div>
        )}
      </div>
    </Filter>
  );
};

export default Filter;
