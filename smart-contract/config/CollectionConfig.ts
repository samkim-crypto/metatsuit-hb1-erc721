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
  contractName: "MetatsuitBonzai",
  tokenName: "Metatsuit Hybrid Box V-1",
  tokenSymbol: "HBV1",
  hiddenMetadataUri:
    "ipfs://QmcPAaQZmpsuhScf2ga3GY1V8go2vCt5sdAAeTdRhdAgj7/hidden.json",
  maxSupply: 300,
  whitelistSale: {
    price: 0.005,
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
  contractAddress: "0x949E90F7Ca72F72Ff9DCd56d28408B16347D20Db",
  marketplaceIdentifier: "my-nft-token",
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
