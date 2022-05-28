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
  contractName: "MetatBonsaiTest8",
  tokenName: "METATBONSAI Collection Test Version 9",
  tokenSymbol: "HBv1",
  hiddenMetadataUri:
    "ipfs://QmWErzRjpxeMPpRKa5MaNcnjzEqq5Hviq72EBern9zQguk/hidden.json",
  maxSupply: 20,
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
  contractAddress: "0xd67D90Be2f133ed66ce4c4c605E66d137c1292bC",
  marketplaceIdentifier: "my-nft-token",
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
