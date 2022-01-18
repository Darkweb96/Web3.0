// https://eth-ropsten.alchemyapi.io/v2/SRNbm8GbtiaV4wzF3KRML3qwvAIAdIUP

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/SRNbm8GbtiaV4wzF3KRML3qwvAIAdIUP',
      accounts: ['fded678ec23a3af5373d7f86ebaa7fd862544d3401163d51e75166518bae82bb']
    }
  }
}