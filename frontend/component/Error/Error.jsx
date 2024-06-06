import React, { useContext } from "react";
import styles from "./Error.module.css";
import { FaExclamationCircle } from "react-icons/fa"; // Assuming you're using Font Awesome icons

const Error = ({ error, setOpenError }) => {
  return (
    <div className={styles.error} onClick={() => setOpenError(false)}>
      <div className={styles.error_box}>
        <div className={styles.error_box_info}>
          <FaExclamationCircle className={styles.error_icon} />
          <p>{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
