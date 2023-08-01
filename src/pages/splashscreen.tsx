
import { invoke } from "@tauri-apps/api/tauri";
import { useEffect, useState } from "react"

export default function Splash() {
  const [load, setload] = useState(0)
  const maxload = 374

  function Interval() {
    if (load >= maxload) {
      setload(maxload)
      invoke('close_splashscreen').then(console.log).catch(console.error)
      window && window.location.assign("/")
    } else {
      setTimeout(() => {
        setload(load + 1)
      }, (maxload / load)+3)
    }
  }
  useEffect(() => Interval(), [load])

  useEffect(() => {
    invoke("greet", { name: "World" }).then(console.log).catch(console.error);
  }, [])

  return (
    <main className="splashscreen">
      <div className="h-screen w-screen gap-3 flex flex-col justify-center items-center bg-[rgba(5,5,20,0.86)]">
        <img src="/ngamea.png" className="h-48 w-48" />
        <span className="text-7xl text-yellow-400 ">Ngamea Games</span>
        <span className="text-7xl text-white">Launcher</span>
        <div>
          <span className="text-lg">Loading...</span>
          <div className="border border-blue-400 p-1 w-96">
            <div className="bg-blue-400 py-2" style={{ width: `${load}px` }}></div>
          </div>
        </div>
      </div>
    </main>
  )
}