require("@nomiclabs/hardhat-waffle")
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString().trim();
const proyectId = "9ae3aad8020a45bca8536868f89914bc"

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    numbai: {
      url: `https://mainnet.infura.io/v3/${proyectId}`,
      accounts: [privateKey]
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${proyectId}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
}