import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";

import toast from "react-hot-toast";
import { GetToken } from "../../constants";
import CryptoConnect from "./connect/connect";


export default function DepositButton() {
  const [open, setopen] = useState<boolean | null>(null)
  const [method, setmethod] = useState(false)
  const { isOpen, onOpen, onOpenChange } = useDisclosure();


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
      <button onClick={onOpen} className="py-2 px-4 mt-auto hover:bg-cyan-400 bg-cyan-500 font-semibold text-lg">Deposit</button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="4xl"
        isDismissable={false}
        radius="none"
        classNames={{
          closeButton:"text-2xl",
          backdrop: "bg-gradient-to-t from-blue-900/20 to-blue-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent className="bg-gray-100">
       
          <ModalHeader className="flex flex-col gap-1">Deposit Methods</ModalHeader>
          <ModalBody>
            <p className="font-light">(Click to select)</p>
            <div className="flex items-center flex-wrap gap-5 my-3">
              <PaymentMethod text="M-Pesa" img="/mpesalogo.png" type={true} />
              <PaymentMethod text="USDT" img="/usdtlogo.png" type={false} />
            </div>
            <form onSubmit={handleDeposit} className="flex flex-col pb-4 bg-transparent">
              {method ?
                <>
                  <p className="mb-1 font-light">Phone Number</p>
                  <input minLength={10} required type="tel" placeholder="Enter Mpesa number" className="p-2 w-full border border-cyan-400 bg-transparent" />
                  <div className="mt-3">
                    <p className="mb-1 font-light">Amount in Kes</p>
                    <input min={method ? 100 : 1} required type="number" placeholder="Enter amount in USD" className="p-2 w-full border border-cyan-400 bg-transparent" />
                    <p className="my-1 text-sm font-light">Deposit Rates: $1 = Kes 150</p>
                    <p className="font-light text-sm">Minimum Deposit amount is {method ? 'Ksh 100' : '$1'}</p>
                  </div>
                  <button disabled={!method} className="py-2 disabled:bg-gray-400 px-4 mt-4 text-white hover:bg-cyan-400 bg-cyan-500 font-semibold text-lg">Deposit Cash</button>
                </>
                :
                <CryptoConnect txType="deposit" />
              }
            </form>
          </ModalBody>
         
        </ModalContent>
      </Modal>
    </section>
  )
}