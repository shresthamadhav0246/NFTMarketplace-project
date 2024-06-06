import React from "react";
import styles from "./Title.module.css";
import styled from "styled-components";

const Title = ({ heading, paragraph }) => {
  const Card = styled.div`
    background-color: ${({ theme }) => theme.cardBg};
    color: ${({ theme }) => theme.text};
    text-align: start;
    width: 100%;
    max-width: 1200px;
    padding: 20px;

    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  `;

  return (
    <div className={styles.title}>
      <Card>
        <div className={styles.title_box}>
          <h2>{heading}</h2>
          <p>{paragraph}</p>
        </div>
      </Card>
    </div>
  );
};

export default Title;
