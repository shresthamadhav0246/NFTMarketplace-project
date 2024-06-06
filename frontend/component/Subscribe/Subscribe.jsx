import React from "react";
import Image from "next/image";
import styles from "./Subscribe.module.css";
import { RiSendPlaneFill } from "react-icons/ri";
import img from "../../img/update.png"; // Ensure this is the correct path

const Subscribe = () => {
  return (
    <div className={styles.subscribe}>
      <div className={styles.subscribe_box}>
        <div className={styles.subscribe_box_left}>
          <h1>Never miss a drop</h1>
          <p>
            Subscribe to our super-exclusive drop list and be the first to know
            about upcoming drops.
          </p>
          <div className={styles.subscribe_box_left_box}>
            <span>01</span>
            <small>Get More discount</small>
          </div>
          <div className={styles.subscribe_box_left_box}>
            <span>02</span>
            <small>Get premium magazines</small>
          </div>
          <div className={styles.subscribe_box_left_input}>
            <input type="text" placeholder="Enter your email..." />
            <RiSendPlaneFill className={styles.subscribe_box_left_input_icon} />
          </div>
        </div>
        <div className={styles.subscribe_box_right}>
          <Image
            src={img}
            alt="Update Image"
            width={800}
            height={600}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
