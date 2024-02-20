//https://eth-sepolia.g.alchemy.com/v2/BSvHrNeAQR_EWZ3EhqFW9dYpRHg5Qq0Q

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity:'0.8.0',
  networks:{
    sepolia:{
      url:"https://eth-sepolia.g.alchemy.com/v2/BSvHrNeAQR_EWZ3EhqFW9dYpRHg5Qq0Q",
      accounts:['9bf6c5993a1942212e2e8361749ad6cf455ce3282a5ec60652f28eae158ccd9c']
    }
  }
}