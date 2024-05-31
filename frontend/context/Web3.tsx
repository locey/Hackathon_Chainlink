/*
 * @Author: Jacket-mzl
 * @Date: 2024-05-20 11:56:37
 * @LastEditors: Jacket-mzl
 * @LastEditTime: 2024-05-22 21:37:58
 * @Description:
 */
"use client";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { State, WagmiProvider } from "wagmi";
import { WALLETCONNECT_CONFIG, WALLETCONNECT_PROJECT_ID } from "@/utils/web3";
import { store } from "@/redux";
import { Provider } from "react-redux";
interface Props extends PropsWithChildren {
  initialState?: State;
}

const queryClient = new QueryClient();

createWeb3Modal({
  wagmiConfig: WALLETCONNECT_CONFIG,
  projectId: WALLETCONNECT_PROJECT_ID,
  enableAnalytics: false, // Optional - defaults to your Cloud configuration
  enableOnramp: true,
});

export function Web3Provider(props: Props) {
  return (
    <>
      <WagmiProvider
        config={WALLETCONNECT_CONFIG}
        initialState={props.initialState}
      >
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            {props.children}
          </QueryClientProvider>
        </Provider>
      </WagmiProvider>
    </>
  );
}
