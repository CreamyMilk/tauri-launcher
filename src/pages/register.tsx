import Link from "next/link";
import { useState } from "react";
import { RegisterReq } from "../types";

export default function Register() {
  const Lvl = ({ i, t, s }) =>
    <span className={"flex items-center capitalize gap-3 " + (s && "text-green-400")}>
      <span className={"rounded-full flex justify-center items-center h-10 w-10 border-2 p-3 " + (s && "border-green-400 ")}>{i}</span>
      {t}
    </span>

  const [pos, setpos] = useState(0)
  const [goodName, setgoodName] = useState()

  const [data, setData] = useState<RegisterReq>()

  async function handleRegister() {
    console.log(data);
    window.location.assign("/home")
  }

  return (
    <main className="loginpage text-white">
      <section className="h-screen w-screen flex gap-2 flex-col items-center">
        <img src="/ngamea.png" className="h-28 w-28 mb-12 mt-52" />
        {pos == 0 ?
          <>
            <p className="text-2xl">Let's get started</p>
            <span className="text-5xl mb-14 font-semibold">First, enter your email</span>
            <input
              type="email"
              value={data?.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="Email"
              className="border w-1/3 p-4 rounded-full bg-transparent hover:outline-none focus:outline-none"
            />
            <Link href="/login"><a className="mt-10 text-green-400 text-lg">Login instead?</a></Link>

          </>
          : pos == 1 ?
            <>
              <span className="text-4xl mb-14 font-semibold">Enter your username</span>
              <div className="flex w-1/3 items-center border rounded-full p-4 gap-3">
                <input
                  type="text"
                  value={data?.username}
                  placeholder="Username"
                  onChange={(e) => setData({ ...data, username: e.target.value })}
                  className="flex-grow bg-transparent hover:outline-none focus:outline-none"
                  defaultValue=""
                />
                {goodName !== undefined &&
                  (goodName == true ?
                    <i className="fa-solid text-green-400 fa-lg fa-circle-check"></i>
                    :
                    goodName == false ?
                      <>
                        <span className="text-red-400">Username already exists</span>
                        <i className="text-red-400 fa-solid fa-lg fa-circle-xmark"></i>
                      </>
                      : goodName == null &&
                      <>
                        <span className="text-green-400">Checking</span>
                        <i className="text-green-400 fa-solid fa-xl animate-spin fa-circle-notch"></i>
                      </>
                  )}
              </div>
            </>
            :
            <>
              <span className="text-4xl mb-10 font-semibold">Enter your password and confirm</span>
              <input
                type="password"
                value={data?.password}
                placeholder="Password"
                onChange={(e) => setData({ ...data, password: e.target.value })}
                className="border w-1/3 p-4 mb-4 rounded-full bg-transparent hover:outline-none focus:outline-none"
              />
              <input
                type="password"
                value={data?.confirmPassword}
                placeholder="Confirm Password"
                onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
                className="border w-1/3 p-4 rounded-full bg-transparent hover:outline-none focus:outline-none"
              />
            </>
        }
        <div className="border-t border-slate-400 flex gap-7 px-10 text-xl py-10 w-full bottom-0 absolute">
          <Lvl i={1} t="get started" s={pos == 0} />
          <Lvl i={2} t="profile details" s={pos == 1} />
          <Lvl i={3} t="password" s={pos == 2} />
          <div className="ml-auto">
            {pos > 0 &&
              <button type="button" onClick={() => pos >= 1 && setpos(pos - 1)} className="rounded-full ml-auto border-2 w-max border-cyan-500 px-9 hover:bg-cyan-400 py-3">
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            }
            <button type="button" onClick={() => pos < 2 ? setpos(pos + 1) : handleRegister()} className="rounded-full ml-5 text-lg border-2 w-max border-cyan-500 px-9 hover:bg-cyan-400 py-3">
              {pos == 2 ? "Create your account" : "Continue"}
            </button>
          </div>
        </div>
      </section>
    </main >
  )
}