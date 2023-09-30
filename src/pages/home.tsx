

import Layout from "../components/layout";
import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, cn } from "@nextui-org/react";

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
          <div className="inline-flex items-center gap-1">
            <span>Showing: </span>
            <Dropdown className="bg-slate-800 text-white">
              <DropdownTrigger>
                <a className="capitalize">{pl} <i className={`fa-solid fa-caret-${plDp ? 'up align-middle' : 'down'}`}></i></a>
              </DropdownTrigger>
              <DropdownMenu onAction={(key) => setpl(key.toString())} variant="flat">
                {platforms.map((p, i) =>
                  <DropdownItem key={p} className="capitalize">
                    {p}
                  </DropdownItem>
                )}
              </DropdownMenu>
            </Dropdown>

            <span className="ml-5">Sort By: </span>
            <Dropdown className="bg-slate-800 text-white">
              <DropdownTrigger>
                <a className="capitalize">{sort} <i className={`fa-solid fa-caret-${plDp ? 'up align-middle' : 'down'}`}></i></a>
              </DropdownTrigger>
              <DropdownMenu onAction={(key) => setsort(key.toString())} variant="flat">
                {sortings.map((s, i) =>
                  <DropdownItem key={s} className="capitalize">
                    {s}
                  </DropdownItem>
                )}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        <div className="flex py-5 flex-wrap gap-2">
          {Array(4).fill(null).map((_, i) =>
            <div
              onMouseOver={() => document.getElementById("game-card-details" + i).classList.remove("invisible")}
              onMouseOut={() => document.getElementById("game-card-details" + i).classList.add("invisible")}
              className="border-2 transition-all relative border-transparent hover:border-cyan-400 hover:text-cyan:400 rounded-3xl w-1/5 p-1">
              <img src={`/images/bottomBanner${i}.png`} alt="" className="w-full h-44 rounded-2xl object-cover" />
              <Link legacyBehavior href={"/game/" + i}>
                <a
                  id={"game-card-details" + i}
                  className="absolute flex flex-col game-card-details cursor-pointer invisible justify-center  items-center h-full w-full top-0 hover:bg-[rgb(10,15,40)] hover:bg-opacity-50 rounded-3xl left-0">
                  <i className="fa-solid text-6xl fa-circle-play"></i>
                  <span className="text-center overflow-hidden break-all mt-5 w-fit mx-3 font-semibold">Valheim</span>
                </a>
              </Link>
            </div>
          )}
        </div>
      </section>

    </Layout >
  )
}



