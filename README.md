# Monad Testnet Smart Contract Practice

This repository contains a basic Solidity smart contract deployed to Monad Testnet using Hardhat.

## Stack

- Solidity
- Hardhat
- TypeScript
- Ethers.js
- Monad Testnet

## Contract

`SimpleStorage.sol` allows storing and reading a number on-chain.

## Deployment

The contract was deployed to Monad Testnet using a Hardhat deployment script.

## Environment variables

Create a `.env` file:

MONAD_RPC_URL=https://testnet-rpc.monad.xyz
MONAD_PRIVATE_KEY=your_private_key

## Commands

npm install
npx hardhat compile
npx hardhat run scripts/deploy.ts --network monadTestnet
