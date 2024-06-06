import React, { useContext, useState } from "react";
import styles from "./OwnedNFTs.module.css";
import Image from "next/image";
import NFTMarketplaceContext from "@/context/NFTMarketplace";
import { useRouter } from "next/router";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
`;
const OwnedNFTs = ({ nfts = [] }) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [resellPrice, setResellPrice] = useState("");
  const [selectedNFT, setSelectedNFT] = useState(null);
  const { resellToken } = useContext(NFTMarketplaceContext);

  const handleResellClick = (nft) => {
    setSelectedNFT(nft);
    setShowModal(true);
  };

  const handleResell = async () => {
    const formInputPrice = resellPrice;
    const isReselling = true;
    const id = selectedNFT.itemId;
    try {
      await resellToken(formInputPrice, id);

      setShowModal(false); // Close the modal after successful resell
      router.push("/profile");
    } catch (error) {
      console.error("Error reselling NFT:", error);
    }
  };

  return (
    <div className={styles.nftsContainer}>
      {nfts.map((nft) => (
        <div key={nft.id} className={styles.nftCard}>
          <Image
            width={100}
            height={100}
            src={nft.image}
            alt={nft.title}
            className={styles.nftImage}
          />
          <Card>
            <div className={styles.nftDetails}>
              <h3 className={styles.nftTitle}>{nft.name}</h3>
              <p className={styles.nftPrice}>{`Price: ${nft.price} ETH`}</p>
            </div>
            <div className={styles.nftResell}>
              <button
                className={styles.nftResell_button}
                onClick={() => handleResellClick(nft)}
              >
                Resell
              </button>
            </div>
          </Card>
        </div>
      ))}
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span
              className={styles.closeButton}
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>
            <h2 className={styles.modalTitle}>Enter Resell Price</h2>
            <input
              type="number"
              placeholder="Resell Price (ETH)"
              value={resellPrice}
              onChange={(e) => setResellPrice(e.target.value)}
              className={styles.resellInput}
            />
            <button className={styles.resellButton} onClick={handleResell}>
              Confirm Resell
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OwnedNFTs;
