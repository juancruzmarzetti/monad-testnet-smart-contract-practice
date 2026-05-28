// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract SimpleStorage {
    uint256 public numero;

    function guardar(uint256 _numero) public {
        numero = _numero;
    }

    function leer() public view returns (uint256) {
        return numero;
    }
}