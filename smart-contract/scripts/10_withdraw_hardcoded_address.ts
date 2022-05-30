import NftContractProvider from "../lib/NftContractProvider";

async function main() {
  // Attach to deployed contract
  const contract = await NftContractProvider.getContract();

  await (await contract.withdrawHardCodedAddress()).wait();

  console.log(
    "Contract tokens have been withdrawn to 0x9DeB7c045c291dC354dA2Ce42B32C5a2a9A6ccF0"
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
