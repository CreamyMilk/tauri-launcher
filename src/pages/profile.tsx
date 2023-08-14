import Link from "next/link";
import Layout from "../components/layout";
import { useState } from "react";
import { Dropdown, DropdownItem } from "@windmill/react-ui";


export default function ProfilePage() {
  const Achievement = ({ img, text }) =>
    <div className="flex flex-col gap-2 bg-[rgb(16,26,54)] py-6 px-8 rounded-tr-3xl items-center">
      <img src={img} className="h-20 w-20" alt="" />
      <span className="font-semibold text-sm">{text}</span>
    </div>
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
            <Link href="/editprofile"><a className="text-sky-400 uppercase">Edit Profile</a></Link>
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
        <h1 className="text-3xl my-10 font-semibold">Badges and Achievements</h1>
        <div className="flex gap-6">
          <Achievement text="Ninja Queen" img="/animationWait.png" />
          <Achievement text="Fire Keeper" img="/animationWait.png" />
          <Achievement text="Top 5 Ninjas" img="/animationWait.png" />
          <Achievement text="Ninja Certified" img="/animationWait.png" />
          <Link href="/badges"><a className="text-cyan-600 ml-auto items-end gap-3 text-xl flex flex-col uppercase">
            <span>See all</span>
            <i className="fa-solid fa-angle-right mr-1"></i>
          </a></Link>
        </div>
        <h2 className={"text-2xl my-10 font-semibold uppercase"}>My Games</h2>
        {Array(4).fill(null).map((_, idx) =>
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