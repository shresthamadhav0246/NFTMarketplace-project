import axios from "axios";

const API_URL = "https://nft-market-backend-5a9716c6a442.herokuapp.com/api";

// Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/users/user", userData);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getUser = async (walletAddress) => {
  try {
    const response = await axiosInstance.get(`/users/${walletAddress}`);
    console.log("Functiona called");
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// NFT APIs
export const createNFT = async (nftData) => {
  try {
    const response = await axiosInstance.post("/nfts", nftData);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getNFT = async (id) => {
  try {
    const response = await axiosInstance.get(`/nfts/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// Like APIs
export const likeNFT = async (likeData) => {
  try {
    const response = await axiosInstance.post("/likes", likeData);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// Function to get total likes for a specific NFT
export const getTotalLikes = async (tokenId) => {
  try {
    const response = await axiosInstance.get(`/likes/${tokenId}/total`, {});
    return response.data.totalLikes;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const followNFT = async (followerAddress, tokenId) => {
  try {
    const response = await axiosInstance.post("/follows/follow", {
      followerAddress,
      tokenId,
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const unfollowNFT = async (followerAddress, tokenId) => {
  try {
    const response = await axiosInstance.post("/follows/unfollow", {
      followerAddress,
      tokenId,
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// Function to get followed NFTs for a specific user
export const getFollowedNFTs = async (followerAddress) => {
  try {
    const response = await axiosInstance.get(
      `/follows/follow/${followerAddress}`
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// Chat APIs
export const createChatMessage = async (tokenId, chatData) => {
  try {
    const response = await axiosInstance.post(
      `/chats/chat/${tokenId}`,
      chatData
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getChatMessages = async (tokenId) => {
  try {
    const response = await axiosInstance.get(`/chats/chat/${tokenId}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
