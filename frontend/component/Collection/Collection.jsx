import React, { useState } from "react";
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar3,
} from "react-icons/bs";

import styles from "./Collection.module.css";
import DaysComponent from "./DaysComponent/DaysComponent";

const Collection = () => {
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const popularArray = [1, 2, 3, 4, 5, 6];
  const followingArray = [1, 2, 3, 4];
  const newsArray = [1, 2, 3, 4, 5];

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

  const openNews = () => {
    if (!news) {
      setPopular(false);
      setFollowing(false);
      setNews(true);
    }
  };

  return (
    <div className={styles.collection}>
      <div className={styles.collection_title}>
        <h2>Top List Creators</h2>

        <div className={styles.collection_collections}>
          <div className={styles.collection_collections_btn}>
            <button onClick={() => openPopular()}>
              <BsFillAlarmFill
                className={styles.collection_collections_btn_icon}
              />{" "}
              Last 24 hours
            </button>
            <button onClick={() => openFollower()}>
              <BsCalendar3 className={styles.collection_collections_btn_icon} />{" "}
              Last 7 days
            </button>
            <button onClick={() => openNews()}>
              <BsFillCalendarDateFill
                className={styles.collection_collections_btn_icon}
              />{" "}
              Last 30 days
            </button>
          </div>
        </div>
      </div>

      {popular && (
        <div className={styles.collection_box}>
          {popularArray.map((item, i) => (
            <DaysComponent key={i + 1} />
          ))}
        </div>
      )}

      {following && (
        <div className={styles.collection_box}>
          {followingArray.map((item, i) => (
            <DaysComponent key={i + 1} />
          ))}
        </div>
      )}

      {news && (
        <div className={styles.collection_box}>
          {newsArray.map((item, i) => (
            <DaysComponent key={i + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;
