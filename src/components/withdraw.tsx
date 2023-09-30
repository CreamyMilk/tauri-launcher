import { useState } from "react";
import toast from "react-hot-toast";
import { GetToken } from "../../constants";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import CryptoConnect from "./connect/connect";

export default function WithdrawButton({ bal }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
      <button onClick={onOpen} className="py-2 px-4 mt-auto hover:bg-green-400 bg-green-500 font-semibold text-lg">Withdraw</button>
      <Modal
        backdrop="opaque"
        isDismissable={false}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="4xl"
        radius="none"
        classNames={{
          closeButton: "text-2xl",
          backdrop: "bg-gradient-to-t from-blue-900/20 to-blue-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent className="bg-gray-100">
          <ModalHeader className="flex flex-col gap-1">Withdrawal Methods</ModalHeader>
          <ModalBody>
            <div className="px-2 flex gap-2 py-4 my-3 shadow-inner shadow-green-600 rounded">
              <i className="fa-solid fa-wallet text-2xl"></i>
              <span className="font-bold text-lg capitalize">Balance ${bal}</span>
            </div>

            <p className="font-light">(Click to select)</p>
            <div className="flex items-center flex-wrap gap-5 my-3">
              <PaymentMethod text="M-Pesa" img="/mpesalogo.png" type={true} />
              <PaymentMethod text="USDT" img="/usdtlogo.png" type={false} />
            </div>


            <form onSubmit={handleWithdraw} className="flex flex-col gap-1 pb-4 bg-transparent">
              {method ?
                <>
                  <input required minLength={10} type="tel" placeholder="Enter Mpesa number" className="p-2 w-full border border-cyan-400 bg-transparent" />
                  <p className="mb-1 font-light">Withdrawal Rates: $1 = Ksh. 140</p>
                  <input required min={100} type="number" placeholder="Enter amount in USD" className="p-2 w-full border border-cyan-400 bg-transparent" />
                  <p className="my-2 font-light text-sm">Minimum Withdraw amount is Kes 100</p>
                  <button disabled={!method} className="py-2 disabled:bg-gray-400 px-4 mt-auto text-white hover:bg-green-500 bg-green-600 font-semibold text-lg">Withdraw Cash</button>
                </>
                :
                <CryptoConnect txType="withdraw" />
              }


            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </section >
  )
}