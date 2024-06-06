import Image from "next/image";
import React from "react";
import discover from "../../img/discover.png";
import wallet from "../../img/wallet.png";
import trading from "../../img/trading.png";
import styles from "./ServiceSection.module.css";
import styled from "styled-components";

const ServiceSection = () => {
  const Card = styled.div`
    background-color: ${({ theme }) => theme.cardBg};
    color: ${({ theme }) => theme.text};
    border-radius: 8px;
  `;
  return (
    <div className={styles.service}>
      <div className={styles.service_box}>
        <div className={styles.service_box_item}>
          <Card>
            <Image src={discover} width={40} height={40} />
            <span>Step 1</span>
            <h1>Filter & Discover</h1>
            <p>
              Connect with wallet, discover, buy NFTs, sell your NFTs and earn
              money
            </p>
          </Card>
        </div>

        <div className={styles.service_box_item}>
          <Card>
            <Image src={wallet} width={40} height={40} />
            <span>Step 2</span>
            <h1>Connect wallet</h1>
            <p>
              Connect with wallet, discover, buy NFTs, sell your NFTs and earn
              money
            </p>
          </Card>
        </div>

        <div className={styles.service_box_item}>
          <Card>
            <Image src={trading} width={40} height={40} />
            <span>Step 3</span>
            <h1>Start trading</h1>
            <p>
              Connect with wallet, discover, buy NFTs, sell your NFTs and earn
              money
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
