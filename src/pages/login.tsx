import Link from "next/link";

export default function Login() {

  async function handleLogin(e: any) {
    e.preventDefault()
    console.log(e);
    window.location.assign("/home")
  }

  return (
    <main className="loginpage text-white">
      <form onSubmit={handleLogin} className="h-screen w-screen flex gap-6 flex-col justify-center items-center">
        <img src="/ngamea.png" className="h-28 w-28 mb-5" />
        <p className="text-3xl font-semibold">Log into your Ngamea Games account</p>
        <span>Enter your email/username and password</span>
        <input
          type="email"
          required
          placeholder="Email or Username"
          className="border w-1/3 p-4 rounded-full bg-transparent hover:outline-none focus:outline-none"
        />
        <input
          type="password"
          required
          placeholder="Password"
          className="border w-1/3 p-4 rounded-full bg-transparent hover:outline-none focus:outline-none"
        />
        <button className="rounded-full text-lg border-2 w-max border-cyan-500 px-9 hover:bg-cyan-400 py-3">Login</button>
        <Link href="/register"><a className="text-green-400 text-lg">Create an account?</a></Link>
      </form>
    </main>
  )
}