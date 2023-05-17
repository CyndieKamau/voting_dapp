// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
    // We get the contract to deploy
    const Ballot = await hre.ethers.getContractFactory("Ballot");
    const proposalNames = ['Building a school', 'Building a hospital', 'Buying land'].map(name => hre.ethers.utils.formatBytes32String(name)); // replace with your proposal names
    const ballot = await Ballot.deploy(proposalNames);

    await ballot.deployed();

    console.log("Ballot deployed to:", ballot.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });


