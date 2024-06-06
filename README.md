# NFT Marketplace Project

This project is a full-stack decentralized application (dApp) for an NFT Marketplace. It includes a frontend built with Next.js, a backend with Node.js, and blockchain components developed with Solidity and Hardhat. The application uses Ethers.js and Web3.js for interacting with the blockchain.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The NFT Marketplace allows users to create, buy, sell, and trade NFTs (Non-Fungible Tokens) on the Ethereum blockchain. The project aims to provide a user-friendly interface for interacting with smart contracts and managing NFT assets.

## Features

- Create and deploy NFT smart contracts.
- Mint new NFTs.
- List NFTs for sale.
- Buy and sell NFTs.
- View marketplace listings.
- Real time chats.
- Follow/Unfollow NFTs
- Profile Management

## Technologies Used

- **Frontend:**
  - [Next.js](https://nextjs.org/)
  - [React.js](https://reactjs.org/)
- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express.js](https://expressjs.com/)
- **Blockchain:**
  - [Solidity](https://soliditylang.org/)
  - [Hardhat](https://hardhat.org/)
  - [Ethers.js](https://docs.ethers.io/v5/)
  - [Web3.js](https://web3js.readthedocs.io/)
- **Others:**
  - [Pinata](https://www.pinata.cloud/) for decentralized file storage.

## Installation

Follow these steps to set up the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- [Hardhat](https://hardhat.org/getting-started/#installation)

### Clone the Repository

git clone https://github.com/shresthamadhav0246/NFTMarketplace-project.git

cd NFTMarketplace-project

Install Dependencies
Navigate to each project directory and install the dependencies.
#
Frontend

cd frontend

yarn install
or
npm install
#
Backend

cd backend

yarn install
or
npm install
#
Blockchain

cd blockchain

yarn install
or
npm install
#

## Usage

Start the Frontend

Navigate to the NFTFrontend/my-app directory and start the development server.

cd frontend

yarn dev
or
npm run dev
#
Start the Backend

Navigate to the NFTFrontend/backend directory and start the backend server.

cd backend

yarn start
or
npm start
#
Deploy Smart Contracts

Navigate to the blockchain directory and deploy the smart contracts using Hardhat.

cd blockchain

npx hardhat compile

npx hardhat run scripts/deploy.js --network <your_network>

Replace <your_network> with the network of your choice (e.g., localhost, rinkeby, mainnet).

Interacting with the Blockchain
You can use Ethers.js and Web3.js in your application to interact with the deployed smart contracts. Ensure you have set up the required configurations for connecting to the blockchain network.

## Contributing
We welcome contributions to this project! Please follow these steps:

1.Fork the repository.

2.Create a new branch (git checkout -b feature/your-feature).

3.Make your changes and commit them (git commit -m 'Add some feature').

4.Push to the branch (git push origin feature/your-feature).

5.Open a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

---

This README file provides a comprehensive overview of your project, including its features, technologies used, and instructions for installation and usage. You can further customize it to better fit your project's specifics.

