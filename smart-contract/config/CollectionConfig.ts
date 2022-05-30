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
  contractName: "MetatBonsaiTest14",
  tokenName: "METATBONSAI Collection Test Version 14",
  tokenSymbol: "HBv1",
  hiddenMetadataUri:
    "ipfs://QmXeZubposMnj4RnSsCogqsyCAq723Fr2pxic3EZCsDkge/hidden.json",
  maxSupply: 3000,
  whitelistSale: {
    price: 0.0,
    maxMintAmountPerTx: 350,
  },
  preSale: {
    price: 0.01,
    maxMintAmountPerTx: 100,
  },
  publicSale: {
    price: 0.01,
    maxMintAmountPerTx: 100,
  },
  contractAddress: "0x0D23F75277D3920B67E76AA2fe55Eef0ff8bD147",
  marketplaceIdentifier: "my-nft-token",
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
