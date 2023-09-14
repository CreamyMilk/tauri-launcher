import { WagmiConfig, createConfig, useAccount } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";
import { polygon } from "wagmi/chains";
const chains = [polygon]
const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: "sm5ZVtyqQSMIKDfb2Cbs5DEncZXouZSF", // or infuraId
    walletConnectProjectId: "027c7b9b111b5e0c402c6ce20fdfd038",
    // Required
    chains,
    appName: "Ngamea Games",
    // Optional
    appDescription: "Games Launcher by Ngamea Games",
    appUrl: "https://ngamiagameslanding.vercel.app/", // your app's url
    appIcon: "/ngamea.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);

export default function CryptoConnect() {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <ConnectKitButton theme="retro" showBalance />
        <ConnectStatus />
        <DepositTransaction />
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

const ConnectStatus = () => {
  const { isConnecting, isDisconnected } = useAccount();
  if (isConnecting) return <span className="text-amber-500 my-3">Connecting...</span>;
  if (isDisconnected) return <span className="text-red-500 my-3">Crypto Wallet Disconnected</span>;
  return <span className="text-green-500 my-3">Crypto Wallet Connected</span>;
};
import * as React from 'react'
import { useDebounce } from 'use-debounce'
import {
  usePrepareSendTransaction,
  useSendTransaction,
  useWaitForTransaction,
} from 'wagmi'
import { parseEther } from "ethers";
// import { utils } from 'ethers'


export function DepositTransaction() {
  const receiverAddress = "0xa0919306ccc9C9787b8a629adcd16E086291104e"
  const [debouncedTo] = useDebounce(receiverAddress, 500)

  const [amount, setAmount] = React.useState('')
  const [debouncedAmount] = useDebounce(amount, 500)

  const { config } = usePrepareSendTransaction({
    to: debouncedTo,
    value: debouncedAmount ? parseEther(debouncedAmount) : undefined,
  })
  const { data, sendTransaction } = useSendTransaction(config)

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })

  return (
    <form
      className="flex flex-col bg-transparent"
      onSubmit={(e) => {
        e.preventDefault()
        // sendTransaction?.()
      }}
    >
      <p className="mb-3 font-light">Amount in Ethers</p>
      <input
        aria-label="Amount (ether)"
        onChange={(e) => setAmount(e.target.value)}
        placeholder="0.05"
        className="p-2 w-full border mb-4 border-cyan-400 bg-transparent"
        value={amount}
      />
      <button
        className="py-2 disabled:bg-gray-400 px-4 mt-auto text-white hover:bg-cyan-400 bg-cyan-500 font-semibold text-lg"
        disabled={isLoading || !sendTransaction || !receiverAddress || !amount}
      >
        {isLoading ? 'Sending...' : 'Send'}
      </button>
      {isSuccess && (
        <div>
          Successfully sent {amount} ether to {receiverAddress}
          <div>
            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
          </div>
        </div>
      )}
    </form>
  )
}
