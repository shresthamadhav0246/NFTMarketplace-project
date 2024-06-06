import React, { useState } from "react";

import styles from "./Collection.module.css";
import DaysComponent from "../../component/Collection/DaysComponent/DaysComponent";

const Collection = ({ currentFilter }) => {
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const popularArray = [1, 2, 3, 4, 5, 6];
  const followingArray = [1, 2, 3, 4];

  const openPopular = () => {
    if (!popular) {
      setPopular(true);
      setFollowing(false);
      setNews(false);
    }
  };

  const openFollower = () => {
    if (!following) {
      setPopular(false);
      setFollowing(true);
      setNews(false);
    }
  };

  return (
    <div className={styles.collection}>
      {currentFilter === "popular" && (
        <div className={styles.collection_box}>
          {popularArray.map((item, i) => (
            <DaysComponent key={i + 1} />
          ))}
        </div>
      )}

      {currentFilter === "following" && (
        <div className={styles.collection_box}>
          {followingArray.map((item, i) => (
            <DaysComponent key={i + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;
