require("@nomicfoundation/hardhat-toolbox");
require('hardhat-abi-exporter');

let dotenv = require('dotenv')
dotenv.config({ path: ".env" })

const mnemonic = process.env.MNEMONIC
//0x8ecd0efcaa19df22ea3d5b44f5a8fdb99b3fec90
const scankey = process.env.ETHERSCAN_API_KEY

module.exports = {
  solidity: "0.8.18",

  networks: {
    goerli: {
      url: "https://rpc.ankr.com/eth_goerli",
      accounts: {
        mnemonic: mnemonic,
      },
      chainId: 5,
    },
  },

  etherscan: {
    apiKey: {
      goerli: scankey
    }
  }

};
