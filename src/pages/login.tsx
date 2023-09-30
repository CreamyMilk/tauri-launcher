import Link from "next/link";
import { LOGIN } from "../graphql/mutations";
import { LoginResponse } from "../types/auth";
import { AUTHTOKEN, USERNAME } from "../../constants";
import { useState } from "react";

export default function Login() {
  const [loading, setloading] = useState(false)
  const [pwdOn, setPwdOn] = useState(false)


  async function handleLogin(e: any) {
    setloading(true)
    e.preventDefault()
    const res = (await LOGIN(e.target["name"].value, e.target["pwd"].value)) as LoginResponse
    if (res?.Login) {
      localStorage.setItem(AUTHTOKEN, res.Login.token)
      localStorage.setItem(USERNAME, res.Login.name)
      window.location.assign("/home")
    }
    setloading(false)
  }

  const PwdShow = () =>
    <i onClick={() => setPwdOn(!pwdOn)}
      className={"fa-solid absolute top-7 right-5 cursor-pointer hover:text-cyan-400 fa-sm fa-eye" + (!pwdOn ? "-slash" : "")}></i>

  return (
    <main className="loginpage text-white">
      <form onSubmit={handleLogin} className="h-screen w-screen flex gap-6 flex-col justify-center items-center">
        <img src="/ngamea.png" className="h-28 w-28 mb-5" />
        <p className="text-3xl font-semibold">Log into your Ngamea Games account</p>
        <span>Enter your email/username and password</span>
        <input
          type="text"
          required
          name="name"
          placeholder="Email or Username"
          className="border w-1/3 p-4 rounded-full bg-transparent hover:outline-none focus:outline-none"
        />
        <div className="relative w-1/3">
          <input
            type={pwdOn ? "text" : "password"}
            required
            name="pwd"
            placeholder="Password"
            className="border w-full p-4 rounded-full bg-transparent hover:outline-none focus:outline-none"
          />
          <PwdShow />
        </div>
        <button disabled={loading} className="rounded-full text-lg border-2 w-max border-cyan-500 px-9 hover:bg-cyan-400 py-3">Login</button>
        <Link legacyBehavior href="/register"><a className="text-green-400 text-lg">Create an account?</a></Link>
      </form>
    </main>
  )
}