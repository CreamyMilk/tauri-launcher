import { useState } from "react";
import Modal from "./modal";
import toast from "react-hot-toast";
import { GetToken } from "../../constants";

export default function WithdrawButton({ bal }) {
  const [open, setopen] = useState<boolean | null>(null)
  const [method, setmethod] = useState(false)

  const PaymentMethod = ({ img, text, type }) =>
    <button onClick={() => setmethod(type)} className="px-16 rounded-sm py-3 hover:scale-105 bg-white transition-all gap-5 shadow-lg flex flex-col items-center">
      <img className="h-24 w-24 object-contain" src={img} alt="" />
      <h3 className="text-xl">{text}</h3>
      <i className={"fa-regular text-xl " + (type == method ? "fa-circle-check text-green-400" : "fa-circle text-gray-200")}></i>
    </button>

  async function handleWithdraw(e) {
    e.preventDefault()
    console.log(e);
  }

  return (
    <section>
      <button onClick={() => setopen(true)} className="py-2 px-4 mt-auto hover:bg-green-400 bg-green-500 font-semibold text-lg">Withdraw</button>
      <Modal id="withdrawModal" show={open}>
        <div className="bg-gray-100 rounded text-gray-600 p-4 w-1/2">
          <div className="flex justify-between items-center border-b border-gray-400 py-2">
            <h1 className="text-2xl">Withdrawal Methods</h1>
            <button onClick={() => setopen(false)} type="button" className=" hover:text-red-400">
              <i className="fa-solid fa-xmark fa-xl"></i>
            </button>
          </div>

          <div className="px-2 flex gap-2 py-4 my-5 shadow-inner shadow-green-600 rounded">
            <i className="fa-solid fa-wallet text-2xl"></i>
            <span className="font-bold text-lg capitalize">Balance ${bal}</span>
          </div>

          <p className="font-light my-5">(Click to select)</p>
          <div className="flex items-center flex-wrap gap-5 mb-10">
            <PaymentMethod text="M-Pesa" img="/mpesalogo.png" type={true} />
            <PaymentMethod text="USDT" img="/usdtlogo.png" type={false} />
          </div>


          <form onSubmit={handleWithdraw} className="flex flex-col gap-4 bg-transparent">
            {method ?
              <input required minLength={10} type="tel" placeholder="Enter Mpesa number" className="p-2 w-full border border-cyan-400 bg-transparent" />
              :
              <button type="button" onClick={() => toast.error("Crypto Withdrawals Coming Soon")} className="py-2 px-4 mt-auto text-white hover:bg-teal-500 bg-teal-600 font-semibold text-lg">Connect Wallet</button>
            }

            <div>
              {method && <p className="mb-1 font-light">Withdrawal Rates: $1 = Ksh. 143</p>}
              <input required min={method ? 100 : 1} type="number" placeholder="Enter amount in USD" className="p-2 w-full border border-cyan-400 bg-transparent" />
              <p className="my-2 font-light text-sm">Minimum Withdraw amount is {method ? 'Kes 100' : '$1'}</p>
            </div>

            <button disabled={!method} className="py-2 disabled:bg-gray-400 px-4 mt-auto text-white hover:bg-green-500 bg-green-600 font-semibold text-lg">Withdraw Now</button>
          </form>
        </div>

      </Modal>
    </section>
  )
}