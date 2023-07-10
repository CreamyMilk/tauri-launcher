import Link from "next/link";
import { Sidebar } from "../components/SideBarAlt/Sidebar";


export default function Streams() {
  return (
    <Sidebar>
      <div className="max-h-[90vh] overflow-scroll">
        <div className="flex items-center justify-between mr-3">
          <div>
            <p className="text-3xl font-bold">Live Streams</p>
            <p className="my-5">Stream and Watch your favourite players</p>
          </div>
          <Link href="./stream?create=true"><a className="bg-purple-400 float-right text-white px-2 py-3 rounded-xl">
            Start Stream
          </a>
          </Link>
        </div>
        <input type="text" className="px-4 py-3 bg-gray-900 rounded-xl text-white w-full" placeholder="🔍 Search" />
        <table className="stream-table table text-gray-400 border-separate space-y-6 text-sm w-full">
          <thead className="bg-gray-900 text-gray-500">
            <tr>
              <th className="p-3 text-left">Streamer Name</th>
              <th className="p-3 text-left">Game</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {Array(30).fill().map((_, i) =>
              <tr key={i} className="bg-gray-800 hover:bg-gray-900">
                <td className="p-3">
                  <div className="flex align-items-center">
                    <img className="rounded-full h-12 w-12  object-cover" src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="unsplash image" />
                    <div className="ml-3">
                      <div className="">SHORT STREAM| MBO VS THE SHANKS</div>
                      <div className="text-gray-500">@NoobMaster65</div>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  Counter Strike: Global Offensive
                </td>
                <td className="p-3">
                  <Link href="./stream?id=8gqh-2wkd-2dl2"><a className="w-full hover:text-white bg-purple-400 text-white p-2 rounded mt-5">Enter</a></Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Sidebar>
  )
}