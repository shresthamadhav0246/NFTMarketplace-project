import React, { useState } from "react";
import styles from "./ContactForm.module.css"; // Ensure correct path to CSS file
import styled from "styled-components";

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
`;

const Textarea = styled.textarea`
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
`;

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "", // optional
    organization: "", // optional
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    alert("Thank you for your message. We will get back to you shortly.");
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          required
          onChange={handleChange}
          className={styles.input}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email address"
          required
          onChange={handleChange}
          className={styles.input}
        />
        <Input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          onChange={handleChange}
          className={styles.input}
        />
        <Textarea
          name="message"
          placeholder="Message"
          required
          onChange={handleChange}
          className={styles.textarea}
        />
        <Input
          type="text"
          name="phone"
          placeholder="Phone number (optional)"
          onChange={handleChange}
          className={styles.input}
        />
        <Input
          type="text"
          name="organization"
          placeholder="Organization (optional)"
          onChange={handleChange}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </Card>
  );
}

export default ContactForm;
