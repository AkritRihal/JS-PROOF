// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract MyToken {

    // Public variables here
    string public tokenName = "MyToken";
    string public tokenAbbrv = "MTK";
    uint public totalSupply;

    // Mapping variable here
    mapping(address => uint) public balances;

    // Mint function
    function mint(address _to, uint _value) public {
        totalSupply += _value;
        balances[_to] += _value;
    }

    // Burn function
    function burn(address _from, uint _value) public {
        if(balances[_from] >= _value){
            totalSupply -= _value;
            balances[_from] -= _value;
        }
    }
}
