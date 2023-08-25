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
  const sortings = ["Popularity", "Newest", "Oldest", "Lowest Price", "Highest Price"]
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
                {platforms.map((p, i) =>
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
                {sortings.map((s, i) =>
                  <DropdownItem key={i} onClick={() => setsort(s)} className={`text-gray-300 hover:bg-slate-700 capitalize mt-2 ${sort == s && "bg-slate-700"}`}>
                    {s}
                  </DropdownItem>
                )}
              </Dropdown>
            </div>
          </div>
        </div>

        <div className="flex py-5 flex-wrap gap-8">
          {Array(4).fill(null).map((_, i) =>
            <div
              onMouseOver={() => document.getElementById("game-card-details"+i).classList.remove("invisible")}
              onMouseOut={() => document.getElementById("game-card-details"+i).classList.add("invisible")}
              className="border-2 transition-all  relative border-transparent hover:border-cyan-400 hover:text-cyan:400 rounded-3xl w-1/4 p-1">
              <img src={`/images/bottomBanner${i}.png`} alt="" className="w-full h-48 rounded-2xl object-cover" />
              <Link href={"/game/"+i}>
                <a
                  id={"game-card-details"+i}
                  className="absolute flex text-6xl flex-col game-card-details cursor-pointer invisible justify-center  items-center h-full w-full top-0 hover:bg-[rgb(10,15,40)] hover:bg-opacity-50 rounded-3xl left-0">
                  <i className="fa-solid fa-circle-play"></i>
                  {/* <span className="text-center font-semibold">Valheim</span> */}
                </a>
              </Link>
            </div>
          )}
        </div>
      </section>

    </Layout >
  )
}