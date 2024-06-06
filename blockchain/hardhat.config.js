require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RCP_KEY =
  process.env.SEPOLIA_RCP_KEY ||
  "https://eth-sepolia.g.alchemy.com/v2/l6CNn6moSnmhGfzlVkTyPC_YTwtf0_We";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x";

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: SEPOLIA_RCP_KEY,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 11155111,
    },
  },
};
