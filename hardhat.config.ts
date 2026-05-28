import hardhatToolboxMochaEthersPlugin from "@nomicfoundation/hardhat-toolbox-mocha-ethers";
import { defineConfig } from "hardhat/config";
import dotenv from "dotenv";

dotenv.config();

const MONAD_RPC_URL = process.env.MONAD_RPC_URL;
const MONAD_PRIVATE_KEY = process.env.MONAD_PRIVATE_KEY;

if (!MONAD_RPC_URL) {
  throw new Error("MONAD_RPC_URL is not defined in .env");
}

if (!MONAD_PRIVATE_KEY) {
  throw new Error("MONAD_PRIVATE_KEY is not defined in .env");
}

export default defineConfig({
  plugins: [hardhatToolboxMochaEthersPlugin],
  solidity: {
    profiles: {
      default: {
        version: "0.8.28",
      },
      production: {
        version: "0.8.28",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    },
  },
  networks: {
    hardhatMainnet: {
      type: "edr-simulated",
      chainType: "l1",
    },
    hardhatOp: {
      type: "edr-simulated",
      chainType: "op",
    },
    monadTestnet: {
      type: "http",
      chainType: "l1",
      url: MONAD_RPC_URL,
      accounts: [MONAD_PRIVATE_KEY],
    },
  },
});