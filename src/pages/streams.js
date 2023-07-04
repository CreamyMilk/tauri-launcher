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
          <a href="./stream?create=true" className="bg-purple-400 float-right text-white px-2 py-3 rounded-xl">
            Start Stream
          </a>
        </div>
        <input type="text" className="px-4 py-3 bg-gray-900 rounded-xl text-white w-full" placeholder="🔍 Search" />
        <table class="stream-table table text-gray-400 border-separate space-y-6 text-sm w-full">
          <thead class="bg-gray-900 text-gray-500">
            <tr>
              <th class="p-3 text-left">Streamer Name</th>
              <th class="p-3 text-left">StreamID</th>
              <th class="p-3 text-left">Status</th>
              <th class="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {Array(30).fill().map((_, i) =>
              <tr class="bg-gray-800 hover:bg-gray-900">
                <td class="p-3">
                  <div class="flex align-items-center">
                    <img class="rounded-full h-12 w-12  object-cover" src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="unsplash image" />
                    <div class="ml-3">
                      <div class="">Noob Master</div>
                      <div class="text-gray-500">@NoobMaster65</div>
                    </div>
                  </div>
                </td>
                <td class="p-3">
                  8gqh-2wkd-2dl2
                </td>
                <td class="p-3">
                  <span class="bg-green-400 text-white rounded-md p-2">Live</span>
                </td>
                <td class="p-3">
                  <a href="./stream?id=8gqh-2wkd-2dl2" className="w-full hover:text-white bg-purple-400 text-white p-2 rounded mt-5">Enter</a>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Sidebar>
  )
}