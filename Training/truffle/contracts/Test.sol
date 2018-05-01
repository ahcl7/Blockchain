pragma solidity ^0.4.17;
contract Test{
	uint total = 10;
	function getTotal() public view returns(uint) {
		return total;
	}
}
