import React, { useEffect, useState } from "react";
import styles from "./InteractiveFeatures.module.css";
import { createChatMessage, getChatMessages } from "@/utils/api";
import styled from "styled-components";

const Input = styled.input`
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
`;

const InteractiveFeatures = ({ tokenId, walletAddress, shareOptions }) => {
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await getChatMessages(tokenId);
        setChatMessages(response.reverse()); // Display in chronological order
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [tokenId]);

  const handleSendMessage = async () => {
    if (message.trim()) {
      const newMessage = {
        walletAddress,
        message,
        createdAt: new Date().toISOString(), // Add timestamp for sorting
      };

      // Optimistically update the chat messages state
      setChatMessages((prevMessages) => [...prevMessages, newMessage]);

      // Clear the input field
      setMessage("");

      try {
        await createChatMessage(tokenId, newMessage);
      } catch (error) {
        console.error("Error sending message:", error);

        // If there's an error, remove the optimistically added message
        setChatMessages((prevMessages) =>
          prevMessages.filter((msg) => msg !== newMessage)
        );
      }
    }
  };

  return (
    <div className={styles.featuresContainer}>
      {/* Share options */}
      <div className={styles.shareSection}>
        <ul className={styles.shareList}>
          {shareOptions.map((option, index) => (
            <li key={index} className={styles.shareItem}>
              <a href={option.link} className={styles.shareLink}>
                {option.twitter}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat feature */}
      <div className={styles.chatSection}>
        <h3 className={styles.chatSection_title}>Chat</h3>
        <div className={styles.chatBox}>
          <div className={styles.chatMessages}>
            {chatMessages.map((msg, index) => (
              <div key={index} className={styles.chatMessage}>
                <strong>
                  {`${msg.walletAddress.slice(
                    0,
                    4
                  )}...${msg.walletAddress.slice(-4)}`}
                  :
                </strong>{" "}
                {msg.message}
              </div>
            ))}
          </div>
          <Input
            type="text"
            placeholder="Type your message"
            className={styles.chatInput}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button className={styles.sendButton} onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFeatures;
