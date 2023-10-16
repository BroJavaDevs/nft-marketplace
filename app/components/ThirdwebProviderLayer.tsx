"use client"
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet
} from "@thirdweb-dev/react";
import { Sepolia } from '@thirdweb-dev/chains'
type Props = {
  children: React.ReactNode
}

const ThirdwebProviderLayer = ({ children }: Props) => {
  return <ThirdwebProvider 
    activeChain={Sepolia}
    supportedChains={[Sepolia]} 
    clientId={process.env.THIRDWEB_CLIENT_ID}
    supportedWallets={[
      metamaskWallet(),
      coinbaseWallet(),
      walletConnect(),
      localWallet(),
      embeddedWallet(),
    ]}>
    {children}
  </ThirdwebProvider>
}

export default ThirdwebProviderLayer