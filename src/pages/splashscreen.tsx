
import { invoke } from "@tauri-apps/api/tauri";
import { useEffect, useState } from "react"


export default function Splash() {
  const [load, setload] = useState(100)
  const maxload = 384

  function Interval() {
    if (load >= maxload) {
      setload(maxload)
      invoke('close_splashscreen').then(console.log).catch(console.error);
    } else {
      setTimeout(() => {
        setload(load + 1)
      }, (maxload / load) + 2)
    }
  }
  useEffect(() => Interval(), [load])

  useEffect(() => {
    invoke("greet", { name: "World" }).then(console.log).catch(console.error);
  }, [])
  
  return (
    <div className="h-screen w-screen gap-3 text-5xl flex flex-col justify-center items-center bg-[rgb(5,5,20)]">
      <img src="/ngamea.png" className="h-52 w-52" />
      <span>Ngamea Games</span>
      <div className="shadow w-96 bg-gray-100">
        <div className="bg-[rgb(204,158,54)] text-xs leading-none py-1 text-center text-white" style={{ width: load }}>{Math.floor((load / maxload) * 100)}%</div>
      </div>
    </div>
  )
}