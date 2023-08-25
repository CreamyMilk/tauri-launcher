import Link from "next/link";
import Layout from "../components/layout";
import { useState } from "react";
import { Dropdown, DropdownItem } from "@windmill/react-ui";


export default function ProfilePage() {
  const [tab, settab] = useState(false)
  const [editGame, setEditGame] = useState({})

  return (
    <Layout>
      <section className="text-white mx-10">
        <div className="flex items-stretch gap-5">
          <img src="/images/bottomBanner5.png" className="w-44 object-cover" alt="" />
          <div className="flex items-start flex-col gap-4">
            <span>@NoobMaster65</span>
            <h2 className="font-bold text-3xl">Felix Guy</h2>
            <div className="inline-flex items-center gap-2">
              <i className="fa-solid text-green-400 fa-circle fa-2xs"></i>
              Online
            </div>
            <article className="py-2 px-5 text-center mt-auto border border-cyan-500 font-semibold text-lg">Level 7</article>
          </div>
          <div className="flex flex-col items-end gap-3 ml-auto">
            <Link href="/settings"><a className="text-sky-400 uppercase">Edit Profile</a></Link>
            <div className="bg-[rgb(16,26,54)] inline-flex items-center px-20 py-9 gap-20 font-bold">
              <div className="flex gap-2 flex-col">
                <span className="text-lg text-green-400">Wallet Balance</span>
                <span className="text-3xl">5,000 USD</span>
              </div>
              <div className="flex flex-col">
                <input type="number" placeholder="Enter amount in USD" className="p-2 border border-cyan-400 bg-transparent text-white" />
                <small className="text-xs mt-2 text-slate-400">Minimum Deposit or Withdraw amount is 10 USD</small>
                <div className="flex mt-5 justify-between">
                  <button className="py-2 px-4 mt-auto hover:bg-cyan-400 bg-cyan-500 font-semibold text-lg">Deposit</button>
                  <button className="py-2 px-4 mt-auto hover:bg-green-400 bg-green-500 font-semibold text-lg">Withdraw</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-10 items-center my-12">
          <a onClick={() => settab(false)} className={"text-2xl font-semibold uppercase " + (!tab && "text-cyan-400")}>My Games</a>
          <a onClick={() => settab(true)} className={" text-2xl font-semibold uppercase " + (tab && "text-cyan-400")}>Messages</a>
        </div>
        {tab ?
          Array(2).fill(null).map((_, i) =>
            <div key={i} className="min-w-1/3 flex mt-5 flex-col gap-3 bg-slate-800 p-5 rounded-lg">
              <div className="text-sm flex text-slate-400">
                <span>Flow Games Inc.</span>
                <span className="ml-auto">Sent on 10 Apr 2023 08:17 PM</span>
              </div>
              <p className="text-sm">
                Concerning your review on Bioshock, we are reaching out to ask that you send us a screenshot of the issue you are facing to our email at flowgames@gmail.com
              </p>
            </div>
          )
          :
          Array(4).fill(null).map((_, idx) =>
            <div className="flex relative mb-10 items-center">
              <img src="/images/bottomBanner2.png" className="h-44 w-32 absolute z-10 object-cover" alt="" />
              <div className="flex items-start gap-5 ml-16 p-12 w-full  left-16 bg-[rgb(16,26,54)]">
                <div className="flex ml-16 font-semibold gap-2 flex-col">
                  <span className="text-gray-500">Latest Version 2.1.0</span>
                  <Link href="/game/2"><a className="text-3xl capitalize">bioshock: the virus hunt</a></Link>
                  <span className="text-gray-300">10k+ Downloads</span>
                  <span className="text-gray-300">⭐️ 4.6 Rating</span>
                </div>
                <span className="ml-auto text-gray-500">Last updated on 10 Apr 2023</span>
                <button onClick={() => setEditGame({ ...editGame, [idx]: !editGame[idx] })} className="relative hover:text-cyan-400 px-3" >
                  <i className="fa-solid fa-xl fa-ellipsis-vertical"></i>
                  <Dropdown className="bg-slate-900 w-max border-none -ml-20 z-10" isOpen={editGame[idx]} onClose={() => { }}>
                    <DropdownItem className={`text-gray-300 hover:bg-slate-700 capitalize`}>
                      Edit Game
                    </DropdownItem>
                  </Dropdown>
                </button>
              </div>
            </div>
          )}
      </section>
    </Layout >
  )
}