const SimpleStorage = artifacts.require("./SimpleStorage.sol");

// Get Storage Value
module.exports = function() {
  async function getStorageValue() {
    const contract = await SimpleStorage.deployed();
    const value = await contract.get();
    console.log(value);
  }
  getStorageValue();
}
