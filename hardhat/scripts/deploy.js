const { ethers } = require("hardhat");
// 0xAf7e7C46E3Ea0680894D7e363f962B08187d2101
async function main() {
  const whitelistContract = await ethers.getContractFactory('Whitelist');

  const deployedWhitelistContract = await whitelistContract.deploy(10);

  await deployedWhitelistContract.deployed();

  console.log('Whitelist Contract Address:', deployedWhitelistContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });