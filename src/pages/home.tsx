import Layout from "../components/layout";
import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { Dropdown, DropdownItem } from "@windmill/react-ui";
import Link from "next/link";

export default function Home() {
  const [plDp, setplDp] = useState(false)
  const platforms = ["all platforms", "windows", "linux", "mac oS"]
  const [pl, setpl] = useState(platforms[0])

  const [sortDp, setsortDp] = useState(false)
  const sortings = ["Featured", "Newest", "Oldest", "Lowest Price", "Highest Price"]
  const [sort, setsort] = useState(sortings[0])

  return (
    <Layout>
      <section className="mx-10">
        <div className="flex text-white flex-wrap justify-between items-center">
          <h1 className="text-4xl font-bold">All Games (125)</h1>
          <div className="inline-flex items-center gap-12">
            <div className="relative">
              <span>Showing: </span>
              <a onClick={() => setplDp(!plDp)} className="font-semibold hover:border-transparent  cursor-pointer capitalize">{pl} <i className={`fa-solid fa-caret-${plDp ? 'up align-middle' : 'down'}`}></i></a>
              <Dropdown className="bg-slate-900 border-none z-10 right-0 mt-2" isOpen={plDp} onClose={() => { }}>
                {platforms.map((p,i) =>
                  <DropdownItem key={i} onClick={() => setpl(p)} className={`text-gray-300 hover:bg-slate-700 capitalize mt-2 ${pl == p && "bg-slate-700"}`}>
                    {p}
                  </DropdownItem>
                )}
              </Dropdown>
            </div>

            <div className="relative">
              <span>Sort By: </span>
              <a onClick={() => setsortDp(!sortDp)} className="font-semibold hover:border-transparent  cursor-pointer capitalize">{sort} <i className={`fa-solid fa-caret-${sortDp ? 'up align-middle' : 'down'}`}></i> </a>
              <Dropdown className="bg-slate-900 border-none z-10 right-0 mt-2" isOpen={sortDp} onClose={() => { }}>
                {sortings.map((s,i) =>
                  <DropdownItem key={i} onClick={() => setsort(s)} className={`text-gray-300 hover:bg-slate-700 capitalize mt-2 ${sort == s && "bg-slate-700"}`}>
                    {s}
                  </DropdownItem>
                )}
              </Dropdown>
            </div>
          </div>
        </div>

        <div className="flex py-5 flex-wrap gap-2">
          <div
            onMouseOver={() => document.getElementById("game-card-details1").classList.remove("invisible")}
            onMouseOut={() => document.getElementById("game-card-details1").classList.add("invisible")}
            className="border-2 transition-all bg-slate-900 relative border-transparent hover:border-cyan-400 rounded-3xl w-max p-1">
            <img src="/images/bottomBanner1.png" alt="" className="w-48 h-64 rounded-2xl object-cover" />
            <Link href={"/game/1"}>
              <a
                id={"game-card-details1"}
                className="absolute flex text-2xl hover:text-white flex-col gap-4 game-card-details cursor-pointer invisible justify-end items-center h-full w-full top-0 hover:bg-[rgb(10,15,40)] hover:bg-opacity-50 rounded-3xl left-0">
                <i className="fa-solid  fa-ellipsis"></i>
                <span className="mx-3 text-center font-semibold">Valheim</span>
                <i className="fa-solid mb-8  fa-circle-arrow-down"></i>
              </a>
            </Link>
          </div>
          <div
            onMouseOver={() => document.getElementById("game-card-details2").classList.remove("invisible")}
            onMouseOut={() => document.getElementById("game-card-details2").classList.add("invisible")}
            className="border-2 transition-all bg-slate-900 relative border-transparent hover:border-cyan-400 rounded-3xl w-max p-1">
            <img src="/images/bottomBanner2.png" alt="" className="w-48 h-64 rounded-2xl object-cover" />
            <Link href={"/game/2"}>
              <a
                id={"game-card-details2"}
                className="absolute flex text-2xl hover:text-white flex-col gap-4 game-card-details cursor-pointer invisible justify-end items-center h-full w-full top-0 hover:bg-[rgb(10,15,40)] hover:bg-opacity-50 rounded-3xl left-0">
                <i className="fa-solid  fa-ellipsis"></i>
                <span className="mx-3 text-center capitalize font-semibold">bioshock:The virus hunt</span>
                <i className="fa-solid mb-8  fa-circle-arrow-down"></i>
              </a>
            </Link>
          </div>

        </div>
      </section>

    </Layout >
  )
}