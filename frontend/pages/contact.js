import React from "react";
import { ContactForm, ContactInfo, SocialMediaLinks } from "@/contactpage";
import styles from "../styles/contact.module.css";

const contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactSection}>
        <h1 className={styles.contactTitle}>Get in Touch</h1>
        <ContactForm />
      </div>
      <div className={styles.contactSection}>
        <h2 className={styles.contactTitle}>Contact Information</h2>
        <ContactInfo />
      </div>
      <div className={styles.contactSection}>
        <h2 className={styles.contactTitle}>Follow Us</h2>
        <SocialMediaLinks />
      </div>
    </div>
  );
};

export default contact;
