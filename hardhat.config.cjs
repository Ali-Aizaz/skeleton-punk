/* eslint-disable @typescript-eslint/no-var-requires */
require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-etherscan')

require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.9',
  networks: {
    sepolia: {
      url: process.env.ETH_NODE,
      accounts: [process.env.ACCOUNT_SECRET],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
}
