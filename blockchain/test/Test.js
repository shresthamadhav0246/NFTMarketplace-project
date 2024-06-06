const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFTMarketplace", function () {
  let NFTMarketplace;
  let nftMarketplace;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    nftMarketplace = await NFTMarketplace.deploy();
    await nftMarketplace.target;
  });

  it("Should fetch user's NFTs", async function () {
    const price = ethers.parseEther("1");
    const listingPrice = await nftMarketplace.getListingPrice();

    await nftMarketplace
      .connect(addr1)
      .createToken("https://token1.com", price, { value: listingPrice });
    await nftMarketplace
      .connect(addr1)
      .createToken("https://token2.com", price, { value: listingPrice });
    await nftMarketplace
      .connect(addr2)
      .createToken("https://token3.com", price, { value: listingPrice });

    const addr1NFTs = await nftMarketplace
      .connect(addr1)
      .fetchMyNFTs(addr1.address);
    const addr2NFTs = await nftMarketplace
      .connect(addr2)
      .fetchMyNFTs(addr2.address);

    console.log("Addr1 NFTs:", addr1NFTs);
    console.log("Addr2 NFTs:", addr2NFTs);

    expect(addr1NFTs.length).to.equal(2);
    expect(addr2NFTs.length).to.equal(1);
  });

  it("Should fetch items listed by user", async function () {
    const price = ethers.parseEther("1");
    const listingPrice = await nftMarketplace.getListingPrice();

    await nftMarketplace
      .connect(addr1)
      .createToken("https://token1.com", price, { value: listingPrice });
    await nftMarketplace
      .connect(addr1)
      .createToken("https://token2.com", price, { value: listingPrice });
    await nftMarketplace
      .connect(addr2)
      .createToken("https://token3.com", price, { value: listingPrice });

    const addr1ListedItems = await nftMarketplace
      .connect(addr1)
      .fetchItemsListed(addr1.address);
    const addr2ListedItems = await nftMarketplace
      .connect(addr2)
      .fetchItemsListed(addr2.address);

    console.log("Addr1 listed items:", addr1ListedItems);
    console.log("Addr2 listed items:", addr2ListedItems);

    expect(addr1ListedItems.length).to.equal(2);
    expect(addr2ListedItems.length).to.equal(1);
  });

  it("Should fetch unsold market items", async function () {
    const price = ethers.parseEther("1");
    const listingPrice = await nftMarketplace.getListingPrice();

    await nftMarketplace
      .connect(addr1)
      .createToken("https://token1.com", price, { value: listingPrice });
    await nftMarketplace
      .connect(addr1)
      .createToken("https://token2.com", price, { value: listingPrice });
    await nftMarketplace
      .connect(addr2)
      .createToken("https://token3.com", price, { value: listingPrice });

    // Simulate addr1 buying their own NFT to make it sold
    await nftMarketplace.connect(addr1).createMarketSale(1, { value: price });

    const marketItems = await nftMarketplace.fetchMarketItems();
    console.log("Market items:", marketItems);

    expect(marketItems.length).to.equal(2);
  });
});
