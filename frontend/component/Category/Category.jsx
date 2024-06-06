import React from "react";
import img from "../../img/hero.jpg";
import styles from "./Category.module.css";
import { BsCircleFill } from "react-icons/bs";
import Image from "next/image";

const Category = () => {
  const categories = [1, 2, 3, 4, 5];
  return (
    <div className={styles.category}>
      {categories.map((item, i) => (
        <div className={styles.category_box} key={1 + i}>
          <Image
            src={img}
            className={styles.category_box_img}
            alt="Category Image"
            width={350}
            heigh={150}
            objectFit="cover"
          />
          <div className={styles.category_box_title}>
            <span>
              <BsCircleFill />
            </span>
            <div className={styles.category_box_title_info}>
              <h4>Enterainment</h4>
              <small>1946 NFTs</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
