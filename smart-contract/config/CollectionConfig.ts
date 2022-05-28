import CollectionConfigInterface from "../lib/CollectionConfigInterface";
import * as Networks from "../lib/Networks";
import * as Marketplaces from "../lib/Marketplaces";
import whitelistAddresses from "./whitelist.json";

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: "MetatBonsaiTest12",
  tokenName: "METATBONSAI Collection Test Version 12",
  tokenSymbol: "HBv1",
  hiddenMetadataUri:
    "ipfs://QmYhKhLijRe8KiByc1DQJLiCUgTr31GHBs92fVWbH2yfVV/hidden.json",
  maxSupply: 3000,
  whitelistSale: {
    price: 0.0,
    maxMintAmountPerTx: 100,
  },
  preSale: {
    price: 0.01,
    maxMintAmountPerTx: 100,
  },
  publicSale: {
    price: 0.01,
    maxMintAmountPerTx: 100,
  },
  contractAddress: "0x180D9b6820b748c6b9DD1D75a715Ac350571A7aB",
  marketplaceIdentifier: "my-nft-token",
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
