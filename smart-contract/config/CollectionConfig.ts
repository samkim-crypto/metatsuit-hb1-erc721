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
  contractName: "MetatBonzai",
  tokenName: "METATBONSAI Collection",
  tokenSymbol: "HBv1",
  hiddenMetadataUri:
    "ipfs://QmVNGyacKJvyL41jgy8cN3yfSU3kJtKBRonAfvseBpeFEq/1.json",
  maxSupply: 300,
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
  contractAddress: "0xe4d86D7FA120580C208Ff2fBe53b70Be35860D9A",
  marketplaceIdentifier: "my-nft-token",
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
