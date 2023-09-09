import Link from "next/link";
import Layout from "../components/layout";
import { useEffect, useState } from "react";
import { FETCH_STREAMS } from "../graphql/queries";
import { GetToken } from "../../constants";
import { FetchStream, FetchStreamResponse } from "../types/stream";



export default function Streams() {
  const [data, setdata] = useState<FetchStream[]>()
  async function GetStreams() {
    const res = (await FETCH_STREAMS(GetToken())) as FetchStreamResponse
    if (res?.FetchStreams) {
      setdata(res.FetchStreams)
    }
  }
  useEffect(() => {
    GetStreams()
  }, [])

  return (
    <Layout>
      <div className="mx-10">
        <div className="flex text-white items-center justify-between mr-3">
          <div>
            <p className="text-3xl font-bold">Live Streams</p>
            <p className="my-5">Stream and Watch your favourite players</p>
          </div>
          <Link href="./stream?create=true">
            <button className="bg-cyan-400 hover:bg-cyan-500 float-right px-2 py-3 rounded-lg">
              Start Stream
            </button>
          </Link>
        </div>
        <input type="text" className="px-4 py-3 text-white bg-slate-900 focus:outline-none ring-px ring-cyan-400 rounded-xl w-full" placeholder="🔍 Search" />
        <table className="border-spacing-y-3 table text-gray-400 border-separate space-y-6 text-sm w-full">
          <thead className="bg-slate-800 text-gray-500">
            <tr>
              <th className="p-3 text-left">Streamer</th>
              <th className="p-3 text-left">Game</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>

            {data && data.map((s) =>
              <tr key={s.id} className="bg-slate-900 shadow hover:bg-slate-800">
                <td className="p-3">
                  <div className="flex align-items-center">
                    <img className="rounded-full h-12 w-12  object-cover" src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="unsplash image" />
                    <div className="ml-3">
                      <div className="">{s.title}</div>
                      <div className="text-gray-500">@{s.username}</div>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  {s.game}
                </td>
                <td className="pb-3">
                  <Link href={"./stream?id=" + s.roomId}><button className="hover:text-white bg-cyan-400 text-white p-2 rounded mt-5">Watch</button></Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}