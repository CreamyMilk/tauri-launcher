import { AUTHTOKEN } from "../../constants";
import Layout from "../components/layout";

export default function Settings() {
  return (
    <Layout>
      <section className="mx-10 text-white">
        <h1 className="text-4xl font-bold">Settings</h1>
        <p className="text-slate-400 mt-2">Manage your account, stream settings</p>

        <div className="flex text-sm gap-12 mt-10">
          <nav className="flex flex-col gap-3 w-1/4">
            <a className={`rounded-3xl text-lg capitalize w-full hover:bg-[rgb(35,37,57)] px-5 py-2 bg-[rgb(35,37,57)] text-cyan-400`}>Account</a>
            <a className={`rounded-3xl text-lg capitalize w-full hover:bg-[rgb(35,37,57)] px-5 py-2`}>Stream</a>
            <a onClick={() => { localStorage.removeItem(AUTHTOKEN); window.location.assign("/login") }} className="mt-auto text-red-500">Log Out</a>
            <a>About Ngamea Games Launcher</a>
            <a>Third Party Licenses</a>
            <a>Report Bug</a>
            <div className="flex gap-2">
              <a><i className="fa-brands fa-discord"></i></a>
              <a><i className="fa-brands fa-youtube"></i></a>
              <a><i className="fa-brands fa-twitter"></i></a>
              <a><i className="fa-brands fa-facebook"></i></a>
            </div>
          </nav>

          <section className="flex-grow overflow-y-scroll overflow-x-hidden">
            <h1 className="text-3xl font-bold">Profile Avatar</h1>

            <div className="flex gap-5 mt-8 border-b border-slate-700 pb-10 ">
              <img src="/bg/bg3.jpg" className="h-36 w-36 rounded-full object-cover" />
              <div className="flex gap-3 mt-3 flex-col">
                <button className="rounded-full border-2 w-max border-cyan-500 px-9 hover:bg-cyan-400 py-3">Upload Avatar</button>
                <p className="text-slate-400 mt-2">Choose a PNG or JPG image smaller than 1 MB.</p>
              </div>
            </div>

            <h1 className="text-3xl font-bold mt-5">Account Information</h1>
            <form className="flex flex-col gap-3">
              <label className="mt-5">Username</label>
              <input
                type="text"
                placeholder="Username"
                className="border border-slate-500 p-3 rounded-full bg-transparent hover:outline-none focus:outline-none"
                defaultValue="NoobMaster65"
              />
              <label className="mt-5">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="border border-slate-500 p-3 rounded-full bg-transparent hover:outline-none focus:outline-none"
                defaultValue="felixburg@gmail.com"
              />
              <label className="mt-5">Display Name</label>
              <input
                type="text"
                placeholder="Display Name"
                className="border border-slate-500 p-3 rounded-full bg-transparent hover:outline-none focus:outline-none"
                defaultValue="Felix Guy"
              />
              <button className="rounded-full border-2 mt-5 w-max border-cyan-500 px-9 hover:bg-cyan-400 py-3">Update Details</button>

            </form>
            
          </section>
        </div>
      </section>

    </Layout>
  )
}