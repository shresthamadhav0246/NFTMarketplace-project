import React from "react";
import styles from "./ContactInfo.module.css"; // Ensure the correct path to CSS file
import styled from "styled-components";

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
`;

function ContactInfo() {
  return (
    <Card>
      <div className={styles.info}>
        <p>
          Email: <a href="mailto:info@example.com">info@example.com</a>
        </p>
        <p>
          Phone: <a href="tel:+1234567890">+1 234 567 890</a>
        </p>
        <p>Address: 1234 Street Name, City, Country</p>
      </div>
    </Card>
  );
}

export default ContactInfo;
