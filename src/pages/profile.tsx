import Link from "next/link";
import Layout from "../components/layout";
import { useEffect, useState } from "react";
import { Dropdown, DropdownItem } from "@windmill/react-ui";
import { FETCH_PROFILE } from "../graphql/queries";
import { AUTHTOKEN, GetToken } from "../../constants";
import { FetchProfileResponse, UserProfile } from "../types/user";
import DepositButton from "../components/deposit";
import WithdrawButton from "../components/withdraw";


export default function ProfilePage() {
  const [tab, settab] = useState(false)
  const [editGame, setEditGame] = useState({})
  const [userData, setUserData] = useState<UserProfile>()

  async function FetchUserData() {
    const res = (await FETCH_PROFILE(GetToken())) as FetchProfileResponse
    if (res?.UserProfile) {
      setUserData(res.UserProfile)
    }
  }

  useEffect(() => {
    FetchUserData()
  }, [])

  return (
    <Layout>
      <section className="text-white mx-10">
        {userData &&
          <div className="flex items-stretch gap-5">
            <img src={userData.avatar || "/images/bottomBanner5.png"} className="w-44 object-cover" alt="" />
            <div className="flex items-start flex-col gap-4">
              <span>{userData.email}</span>
              <h2 className="font-bold text-3xl">{userData.username}</h2>
              <div className="inline-flex items-center gap-2">
                <i className="fa-solid text-green-400 fa-circle fa-2xs"></i>
                Online
              </div>
              <article className="py-2 px-5 text-center mt-auto border border-cyan-500 font-semibold text-lg">Level {userData.level}</article>
            </div>
            <div className="flex flex-col items-end gap-3 ml-auto">
              <Link href="/settings"><a className="text-sky-400 uppercase">Edit Profile</a></Link>
              <div className="flex gap-2 bg-[rgb(16,26,54)] px-20 py-9 font-bold flex-col items-center">
                <span className="text-lg text-green-400">Wallet Balance</span>
                <span className="text-3xl">${userData.balance.toFixed(2)}</span>
                <div className="flex mt-5 gap-10">
                  <DepositButton />
                  <WithdrawButton bal={userData.balance.toFixed(2)} />
                </div>
              </div>
            </div>
          </div>
        }
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
            <div key={idx} className="flex relative mb-10 items-center">
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
                  <i className={"fa-solid fa-lg " + (editGame[idx] ? "fa-xmark" : "fa-ellipsis-vertical")}></i>
                  <Dropdown className="bg-gray-900 w-max border-none -ml-16 z-10" isOpen={editGame[idx]} onClose={() => { }}>
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