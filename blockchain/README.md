NFT Marketplace

Overview
This is a decentralized NFT marketplace built on the Ethereum blockchain using Solidity for smart contract development and Hardhat for development and testing.

The marketplace allows users to mint, buy, sell, and list non-fungible tokens (NFTs) securely and transparently. It provides functionalities for creating NFTs, listing them for sale, purchasing listed NFTs, and managing ownership.

Features
Minting: Users can mint their own unique NFTs with custom metadata and properties.
Listing: Owners can list their NFTs for sale on the marketplace.
Buying: Users can browse listed NFTs and purchase them securely using Ether.
Reselling: Owners can resell their purchased NFTs on the marketplace.
Market Statistics: Provides insights into the marketplace, such as total NFTs, total sales, etc.
User Profile: Users can view their owned NFTs and their listed NFTs in their profile.

Technologies Used
Solidity: Smart contract language for creating ERC721 compliant NFT contracts.
Hardhat: Ethereum development environment for compiling, deploying, testing, and debugging smart contracts.
React: Frontend framework for building the user interface.
Web3.js / ethers.js: JavaScript libraries for interacting with the Ethereum blockchain from the frontend.
Next.js: React framework for building server-side rendered web applications.
Chakra UI: Component library for building accessible and themeable React applications.
IPFS: InterPlanetary File System for storing NFT metadata and images.

Setup
Clone the Repository: git clone https://github.com/shresthamadhav0246/NFTMarketplace-blockchain.git
Install Dependencies: cd nft-marketplace && npm install
Compile Contracts: npx hardhat compile
Deploy Contracts: npx hardhat run scripts/deploy.js --network sepolia
Start Frontend: npm run dev

Usage
Mint NFTs: Use the marketplace to mint new NFTs with custom metadata.
List NFTs: List your NFTs for sale on the marketplace.
Buy NFTs: Browse the marketplace to find and purchase NFTs listed by other users.
Resell NFTs: Resell your purchased NFTs on the marketplace.
View Profile: View your user profile to see your owned and listed NFTs.

Testing
To run tests:

npx hardhat test Test/test.js
Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

License
This project is licensed under the MIT License.
