/*
 * @Author: Jacket-mzl
 * @Date: 2024-05-17 14:03:17
 * @LastEditors: Jacket-mzl
 * @LastEditTime: 2024-05-20 11:30:19
 * @Description: 定义defaultWagmiConfig
 */
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage } from "wagmi";
import { SITE_INFO, SITE_NAME, SITE_URL } from "./site";
import { ETH_CHAINS } from "./network";

export const WALLETCONNECT_PROJECT_ID =
  process.env.NEXT_PUBLIC_INFURA_KEY ?? "";
if (!WALLETCONNECT_PROJECT_ID) {
  console.warn("You need to provide a WALLETCONNECT_PROJECT_ID env variable");
}

export const WALLETCONNECT_CONFIG = defaultWagmiConfig({
  projectId: WALLETCONNECT_PROJECT_ID,
  chains: ETH_CHAINS,
  metadata: {
    name: SITE_NAME,
    description: SITE_INFO,
    url: SITE_URL,
    icons: [],
  },
  ssr: true,
  // enableEmail: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
