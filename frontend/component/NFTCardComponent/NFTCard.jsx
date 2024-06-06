import React, { useState } from "react";
import styles from "./NFTCard.module.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import img from "../../img/img.png";
import { useRouter } from "next/router";
import styled from "styled-components";

const NFTCard = ({ nfts = [] }) => {
  // State to store like status for each NFT card
  const [likes, setLikes] = useState(nfts.map(() => false));

  console.log(nfts);
  // Function to toggle like status for a specific card
  const toggleLike = (index) => {
    setLikes((prevLikes) => {
      const newLikes = [...prevLikes];
      newLikes[index] = !newLikes[index];
      return newLikes;
    });
  };

  const router = useRouter();

  // Function to navigate to NFTDetails page
  const navigateToNFTDetails = (nft) => {
    router.push({
      pathname: "/NFT-details",
      query: { id: nft.itemId, data: JSON.stringify(nft) },
    });
  };

  const Card = styled.div`
    background-color: ${({ theme }) => theme.cardBg};
    color: ${({ theme }) => theme.text};
  `;

  return (
    <div className={styles.NFTCard}>
      {nfts.map((nft, index) => (
        <div
          className={styles.NFTCard_box}
          key={index}
          onClick={() => navigateToNFTDetails(nft)}
        >
          <div className={styles.NFTCard_box_img}>
            <Image
              src={nft.image || img}
              alt={nft.name}
              width={600}
              height={300}
              className={styles.NFTCard_box_img_img}
            />
          </div>
          <Card>
            <div className={styles.NFTCard_box_update_left}>
              <div
                className={styles.NFTCard_box_update_left_like}
                onClick={(e) => {
                  e.stopPropagation(); // Prevents click event from bubbling to parent div
                  toggleLike(index);
                }}
              >
                {likes[index] ? (
                  <AiFillHeart />
                ) : (
                  <AiOutlineHeart
                    className={styles.NFTCard_box_update_left_like_icon}
                  />
                )}
              </div>
            </div>
          </Card>

          <Card>
            <div className={styles.NFTCard_box_update_details}>
              <div className={styles.NFTCard_box_update_details_price}>
                <div className={styles.NFTCard_box_update_details_price_box}>
                  <h4>{nft.name}</h4>

                  <div
                    className={styles.NFTCard_box_update_details_price_box_box}
                  >
                    <div
                      className={
                        styles.NFTCard_box_update_details_price_box_bid
                      }
                    >
                      <span className={styles.span}>
                        {`Creator: ${nft.seller.slice(
                          0,
                          4
                        )}....${nft.seller.slice(-4)}`}
                      </span>
                      <p>{"Price: " + nft.price + "ETH"}</p>
                    </div>
                    <div
                      className={
                        styles.NFTCard_box_update_details_price_box_stock
                      }
                    ></div>
                  </div>
                </div>
              </div>
              <div className={styles.NFTCard_box_update_details_category}></div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default NFTCard;
