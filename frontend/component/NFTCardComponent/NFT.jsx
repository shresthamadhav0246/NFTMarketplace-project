import React from "react";

const NFT = ({ image, title, description, price, creator }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price} ETH</p>
      <p>Creator: {creator}</p>
    </div>
  );
};

export default NFT;
