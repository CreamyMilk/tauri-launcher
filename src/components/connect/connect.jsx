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
    appDescription: "Official Game Launcher by Ngamea Games",
    appUrl: "https://ngamiagameslanding.vercel.app/", // your app's url
    appIcon: "/ngamea.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);

export default function CryptoConnect({ txType }) {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <ConnectKitButton theme="retro" showBalance />
        <ConnectStatus />
        {txType == "deposit" ? <DepositTransaction /> : <WithdrawTransaction />}
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
import { space } from "postcss/lib/list";
import toast from "react-hot-toast";
// import { utils } from 'ethers'


function WithdrawTransaction() {
  return (
    <div>
      <input min={1} type="number" placeholder="Enter amount in USD" className="p-2 w-full border border-cyan-400 bg-transparent" />
      <p className="my-2 font-light text-sm">Minimum Withdraw amount is $1</p>
      <button onClick={() => toast.error("Crypto Withdrawals coming soon")} 
      className="py-2 disabled:bg-gray-400 w-full px-4 mt-auto text-white hover:bg-green-500 bg-green-600 font-semibold text-lg">Withdraw USDT</button>
    </div>
  )
}

function DepositTransaction() {
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
    <div className="flex flex-col bg-transparent">
      <p className="mb-3 font-light">Amount in Matic</p>
      <input
        aria-label="Amount (ether)"
        onChange={(e) => setAmount(e.target.value)}
        placeholder="0.05"
        className="p-2 w-full border mb-4 border-cyan-400 bg-transparent"
        value={amount}
      />
      <button
        onClick={() => {
          sendTransaction?.()
        }}
        className="py-2 disabled:bg-gray-400 px-4 mt-auto text-white hover:bg-cyan-400 bg-cyan-500 font-semibold text-lg"
        disabled={isLoading || !sendTransaction || !receiverAddress || !amount}
      >
        {isLoading ? 'Sending Transaction...' : 'Deposit Now'}
      </button>
      {isSuccess && (
        <div>
          Successfully sent {amount} matic to {receiverAddress}
          <div>
            <a className="underline" target="_blank" href={`https://polygonscan.com/tx/${data?.hash}`}>Polygon Chain Explorer</a>
          </div>
        </div>
      )}
    </div>
  )
}
