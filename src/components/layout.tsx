import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

export default function Layout({ children }) {
  const router = useRouter()
  const [moreTags, setmoreTags] = useState(false)
  console.log(router.pathname);


  const Navlink = ({ text, url }) =>
    <Link href={url}>
      <a className={`rounded-3xl capitalize hover:bg-[rgb(35,37,57)] w-full px-5 py-2 
    ${router.pathname == "/" + (url == "/" ? "" : url) ? "bg-[rgb(35,37,57)] text-cyan-400" : ""}`}>{text}</a>
    </Link>

  const Taglink = ({ text, color }) =>
    <Link href={"/?tag=" + text}>
      <a className={`rounded-3xl flex items-center gap-2 capitalize hover:bg-[rgb(35,37,57)] w-full px-5 py-2
                  ${router.query.tag == text ? "bg-[rgb(35,37,57)] text-cyan-400" : ""}`}>
        <i className={"fa-solid fa-tag " + color}></i>{text}
      </a>
    </Link>

  const NavLinkIcon = ({ text, icon, url }) =>
    <Link href={url}>
      <a className={`rounded-3xl flex items-center gap-2 capitalize hover:bg-[rgb(35,37,57)] w-full px-4 py-2
        ${router.pathname == "/" + (url == "/" ? "" : url) ? "bg-[rgb(35,37,57)] text-cyan-400" : ""}`}>
        {icon}{text}
      </a>
    </Link>

  return (
    <main className="min-h-screen antialiased min-w-screen bg-gradient-to-br from-[rgb(10,15,40)] to-[rgb(5,3,16)]">

      <div className="fixed flex flex-col font-semibold overflow-y-scroll overflow-x-hidden px-2 pt-5 pb-3 top-0 left-0 h-full w-64 bg-gradient-to-br from-[rgb(10,12,35)] to-[rgb(5,5,20)]">
        <img src="/ngamea.png" className="ml-3 h-12 w-12" alt="" />

        <ul className="text-white flex flex-col mt-10 gap-1">
          <Navlink text="All Games" url="/" />
          <Navlink text="My Games" url="my-games" />
          <Navlink text="Installed" url="installed" />
          <Navlink text="Updates" url="updates" />
          <Link href="/publish"><a className={`rounded-3xl capitalize text-cyan-600 w-full px-4 py-2`}><i className="fa-solid fa-plus"></i> Add Games</a></Link>
        </ul>
        <h4 className="uppercase text-gray-400 font-semibold ml-4 mt-10">Tags</h4>
        <ul className="text-white flex flex-col mt-3 gap-1">
          <Taglink color="text-red-400" text="multiplayer" />
          <Taglink color="text-orange-400" text="action" />
          <Taglink color="text-yellow-400" text="Racing" />
          <Taglink color="text-green-400" text="adventure" />
          <Taglink color="text-blue-400" text="role-playing-game" />
        </ul>
        <a onClick={() => setmoreTags(!moreTags)}
          className={`rounded-3xl flex items-center gap-2 my-1 capitalize text-gray-500 cursor-pointer w-full px-4 py-2`}>
          <i className={"fa-solid fa-tags"}></i>
          See All Tags
          {moreTags ? <i className="fa-solid fa-caret-up mt-1"></i> : <i className="fa-solid fa-caret-down"></i>}
        </a>
        <ul className={`${moreTags ? "" : "hidden"} flex flex-col gap-1 mb-10`}>
          <Taglink color="text-indigo-400" text="shooters" />
          <Taglink color="text-violet-400" text="sports" />
          <Taglink color="text-gray-400" text="strategy" />
          <Taglink color="text-amber-800" text="puzzle" />
          <Taglink color="text-pink-400" text="horror" />
        </ul>

        <ul className="mt-auto">
          <NavLinkIcon text="downloads" url="downloads" icon={<i className="fa-solid fa-circle-arrow-down"></i>} />
          <NavLinkIcon text="help and support" url="help" icon={<i className="fa-solid fa-circle-question"></i>} />
          <NavLinkIcon text="logout" url="logout" icon={<i className="fa-solid fa-power-off"></i>} />
        </ul>

      </div>

      <div className="fixed bg-gradient-to-r overflow-x-scroll from-[rgb(10,15,40)] to-[rgb(5,3,16)] left-64 p-4 right-0 top-0 mb-5 z-50 flex items-center justify-between">
        <div className="inline-flex gap-5 ml-12">
          <Navlink text="home" url="/" />
          <Navlink text="streams" url="streams" />
          <Navlink text="news" url="news" />
          <Navlink text="settings" url="settings" />
        </div>
        <div className="inline-flex gap-10 items-center mr-10">
          <div className="inline-flex items-center border border-gray-600 rounded-3xl px-4 py-2 gap-3">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search game titles" className="flex-grow" defaultValue="" />
          </div>
          <Link href="/profile">
            <a className="inline-flex items-center gap-2">
              <img src="/ngamea.png" className="h-10 w-10 rounded-full" />Noob.Master<i className="fa-solid text-gray-500 fa-caret-down"></i>
            </a>
          </Link>
        </div>

      </div>

      <section className="ml-80 pt-28 mr-10">
        {children}
      </section>
    </main>
  )
}