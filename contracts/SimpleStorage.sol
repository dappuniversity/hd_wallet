pragma solidity 0.4.24;

contract SimpleStorage {
  string value;

  function set(string x) public {
    value = x;
  }

  function get() public view returns (string) {
    return value;
  }
}
