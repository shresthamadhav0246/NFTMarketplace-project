import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "./Audio.module.css"; // Assuming you've updated the styles based on below CSS
import { RiPlayCircleFill, RiPauseCircleFill } from "react-icons/ri";
import { BsFillCartFill } from "react-icons/bs";

const Audio = ({
  audioSrc,
  backgroundImage,
  title,
  artist,
  artistImage,
  price,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className={styles.audioCollection}>
      <div className={styles.audioCollection_box}>
        <div
          className={styles.audioPlayer}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className={styles.overlay} onClick={togglePlayPause}>
            {isPlaying ? (
              <RiPauseCircleFill size={50} />
            ) : (
              <RiPlayCircleFill size={50} />
            )}
          </div>
          <div className={styles.metadata}>
            <Image
              src={artistImage}
              alt={artist}
              width={50}
              height={50}
              className={styles.artistImage}
            />
            <div>
              <div className={styles.artist}>{artist}</div>
              <div className={styles.price}>{price} ETH</div>
            </div>
          </div>
          <button className={styles.buyButton}>
            <BsFillCartFill /> Buy
          </button>
        </div>
      </div>
      <audio ref={audioRef} src={audioSrc} hidden />
    </div>
  );
};

export default Audio;
