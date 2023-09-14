import { useState } from "react";
import Modal from "./modal";
import toast from "react-hot-toast";
import { GetToken } from "../../constants";
import CryptoConnect from "./connect/connect";

export default function DepositButton() {
  const [open, setopen] = useState<boolean | null>(null)
  const [method, setmethod] = useState(false)

  async function handleDeposit(e) {
    e.preventDefault()
    console.log(e);
  }

  const PaymentMethod = ({ img, text, type }) =>
    <button onClick={() => setmethod(type)} className="px-16 rounded-sm py-3 hover:scale-105 bg-white transition-all gap-5 shadow-lg flex flex-col items-center">
      <img className="h-24 w-24 object-contain" src={img} alt="" />
      <h3 className="text-xl">{text}</h3>
      <i className={"fa-regular text-xl " + (type == method ? "fa-circle-check text-green-400" : "fa-circle text-gray-200")}></i>
    </button>

  return (
    <section>
      <button onClick={() => setopen(true)} className="py-2 px-4 mt-auto hover:bg-cyan-400 bg-cyan-500 font-semibold text-lg">Deposit</button>
      <Modal id="depositModal" show={open}>
        <div className="bg-gray-100 rounded text-gray-600 p-4 w-1/2">
          <div className="flex justify-between items-center border-b border-gray-400 py-2">
            <h1 className="text-2xl">Deposit Methods</h1>
            <button onClick={() => setopen(false)} type="button" className=" hover:text-red-400">
              <i className="fa-solid fa-xmark fa-xl"></i>
            </button>
          </div>

          <p className="font-light my-5">(Click to select)</p>
          <div className="flex items-center flex-wrap gap-5 mb-10">
            <PaymentMethod text="M-Pesa" img="/mpesalogo.png" type={true} />
            <PaymentMethod text="USDT" img="/usdtlogo.png" type={false} />
          </div>

          <form onSubmit={handleDeposit} className="flex flex-col bg-transparent">
            {method ?
              <>
                <p className="mb-1 font-light">Phone Number</p>
                <input minLength={10} required type="tel" placeholder="Enter Mpesa number" className="p-2 w-full border border-cyan-400 bg-transparent" />
                <div className="mt-3">
                  <p className="mb-1 font-light">Amount in Kes</p>
                  <input min={method ? 100 : 1} required type="number" placeholder="Enter amount in USD" className="p-2 w-full border border-cyan-400 bg-transparent" />
                  <p className="my-1 text-sm font-light">Deposit Rates: $1 = Kes 148</p>
                  <p className="font-light text-sm">Minimum Deposit amount is {method ? 'Ksh 100' : '$1'}</p>
                </div>
                <button disabled={!method} className="py-2 disabled:bg-gray-400 px-4 mt-4 text-white hover:bg-cyan-400 bg-cyan-500 font-semibold text-lg">Pay Now</button>
              </>
              :
              <CryptoConnect />
            }
          </form>
        </div>
      </Modal>
    </section>
  )
}