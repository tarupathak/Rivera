import { Chain, getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  arbitrum,
  base,
  botanixTestnet,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from "wagmi/chains";
import "@rainbow-me/rainbowkit/styles.css";

const botanixChain: Chain = {
  id: 3636,
  name: "Botanix Testnet",
  // network: "BTC",
  // iconUrl: "/img/b2.png",
  nativeCurrency: {
    decimals: 18,
    name: "Botanix Testnet",
    symbol: "BTC",
  },
  rpcUrls: {
    default: {
      http: ["https://node.botanixlabs.dev"],
    },
    public: {
      http: ["https://node.botanixlabs.dev"],
    },
  },
};

export const config = getDefaultConfig({
  appName: "RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    botanixChain,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  ssr: true,
});
