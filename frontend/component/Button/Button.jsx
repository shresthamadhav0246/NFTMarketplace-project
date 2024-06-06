import React from "react";
import styles from "./Button.module.css"; // Import a CSS module for styling

// Button component that accepts props for button name, handling click events, and optional styles
const Button = ({ btnName, handleClick, style }) => {
  return (
    <button
      className={styles.button} // Using styles from the CSS module
      onClick={handleClick} // Event handler for button clicks
      style={style} // Optional inline styles
    >
      {btnName}
    </button>
  );
};

export default Button;
