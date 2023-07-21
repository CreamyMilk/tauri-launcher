import Layout from "../components/layout";
import { useEffect } from "react";
import { invoke } from "@tauri-apps/api/tauri";

export default function Home() {
  useEffect(() => {
    invoke("greet", { name: "World" }).then(console.log).catch(console.error);
  }, []);

  return (
    <Layout>
      <div className="flex flex-wrap justify-between items-center">
        <h1 className="text-4xl font-bold">All Games (125)</h1>
        <div className="inline-flex items-center gap-12">
          <div className="inline-flex items-center gap-2">
            <span>Showing: <span className="font-semibold hover:text-cyan-400 cursor-pointer">All Platforms</span></span><i className="fa-solid text-gray-500 fa-caret-down"></i>
          </div>
          <div className="inline-flex items-center gap-2">
            <span>Sort By: <span className="font-semibold hover:text-cyan-400 cursor-pointer">Last Played</span></span><i className="fa-solid text-gray-500 fa-caret-down"></i>
          </div>
        </div>
      </div>

      <div className="flex py-5 flex-wrap gap-2">
        {Array(20).fill(null).map((_, i) =>
          <div key={i}
            onMouseOver={() => document.getElementById("game-card-details" + i).classList.remove("invisible")}
            onMouseOut={() => document.getElementById("game-card-details" + i).classList.add("invisible")}
            className="border-2 transition-all bg-[rgb(9,16,48)] gamecard relative border-transparent hover:border-cyan-400 rounded-3xl w-max p-2">
            <img src="/images/bottomBanner2.png" alt="" className="w-48 h-64 rounded-2xl " />
            <div
              id={"game-card-details" + i}
              className="absolute flex flex-col gap-4 game-card-details cursor-pointer invisible justify-end items-center h-full w-full top-0 hover:bg-[rgb(10,15,40)] hover:bg-opacity-50 rounded-3xl left-0">
              <i className="fa-solid text-3xl fa-ellipsis"></i>
              <span className="text-xl mx-3 text-center font-semibold">Bioshock: The Virus Hunt</span>
              <i className="fa-solid mb-8 text-3xl fa-circle-arrow-down"></i>
            </div>
          </div>
        )}
      </div>

    </Layout >
  )
}