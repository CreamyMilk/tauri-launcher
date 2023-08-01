import { useState } from "react";
import Layout from "../../components/layout";
import { useRouter } from "next/router";

export default function Game() {
  const [desc, setdesc] = useState(false)
  const GameAttr = ({ title, text, icon }) =>
    <div className="inline-flex capitalize text-sm flex-col">
      <span className="text-gray-500">{title}</span>
      <span className="text-gray-300"><i className={"fa-xs mr-1 fa-solid fa-" + icon}></i>{text}</span>
    </div>

  const router = useRouter()
  const idCheck = Number(router.query?.id)

  return (
    <Layout>
      <img src="/images/mainBanner.png" className="w-full h-96 object-cover" alt="" />
      <div className="flex gap-4 mx-10">
        <img src={`/images/bottomBanner${idCheck}.png`} className="-mt-20 rounded-2xl ml- border-4 shadow-lg border-slate-900" />
        <div className="flex w-full flex-col gap-2 mt-4 capitalize">
          <div className="flex gap-2 text-sm">
            <span className="text-gray-500 ">Latest Version 2.1.0</span>
            <a className="cursor-pointer hover:text-cyan-400 text-cyan-500">Version History</a>
          </div>
          <div className="flex items-center gap-6">
            <h2 className="text-5xl font-semibold">{idCheck == 2 ? "bioshock: the virus hunt" : "Valheim"}</h2>
            <button title="Share" className="rounded-full px-2 py-1 text-sm hover:border-transparent hover:bg-slate-700 bg-slate-900 border-transparent text-gray-500">
              <i className="fa-solid fa-arrow-up-from-bracket"></i>
            </button>
            <div className="flex ml-auto text-lg flex-col border-r pr-8 border-gray-500">
              <span className="text-gray-500">Price</span>
              <span>{idCheck == 1 ? "$50.00" : "free"}</span>
            </div>
            <button className="rounded-lg w-40 border border-cyan-400 px-9 hover:bg-cyan-400 py-3 text-xl">
              {idCheck == 1 ? "Buy Now" : "Download"}
            </button>
          </div>
          <hr className="border-slate-700 my-2" />
          <div className="flex gap-4 items-center">
            <GameAttr icon="tag" title="downloads" text="100k+" />
            <GameAttr icon="star" title="rating" text="4.6" />
            <GameAttr icon="tag" title="category" text="action" />
            <GameAttr icon="download" title="size" text="22 GB" />
            <GameAttr icon="desktop" title="platform" text="Windows" />
            <div className="ml-auto border-r mr-2 flex flex-col pr-8 border-gray-500">
              <span className="text-gray-500">Streams</span>
              <span>1k+</span>
            </div>
            <button className="rounded-lg w-40 border border-slate-700 px-5 hover:bg-slate-800 py-2">Watch Streams</button>
          </div>
        </div>
      </div>

      <div className="flex overflow-x-scroll mx-10 hide-scrollbar py-5 my-10 gap-10">
        {Array(5).fill(null).map((_, i) =>
          <img key={i} src="/images/mainBanner.png" className="min-w-[500px] max-w-[500px] h-64 object-cover" />
        )}
      </div>

      <section className="mx-10 flex flex-col gap-10">
        <div>
          <article className="font-semibold text-xl my-3">Description</article>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum fugit atque consequuntur soluta accusantium corporis, rem ea at itaque impedit quibusdam voluptates nobis non, quia repellat nisi similique debitis quos!</span>
          {desc && <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ea voluptas deleniti quia quod, voluptatem reprehenderit velit porro voluptate sed ex laudantium, tempore, enim vero ad magnam aliquam corporis autem.</span>}
          <a className="cursor-pointer text-sm capitalize hover:text-cyan-300 text-cyan-400" onClick={() => setdesc(!desc)}> show {desc ? "less" : "more"}</a>
        </div>

        <div className="border-t py-5 border-slate-800">
          <div className="flex items-center justify-between">
            <article className="text-xl my-3 font-semibold ">Ratings and Reviews</article>
            <a className="cursor-pointer text-sm text-cyan-400 hover:text-cyan-300">See all</a>
          </div>
          <div className="flex w-1/4 items-end gap-2">
            <span className="text-5xl">4.6</span>
            <span>out of 5</span>
            <span className="ml-auto">64 ratings</span>
          </div>
          <div className="flex gap-4 my-4">
            {Array(3).fill(null).map((_, i) =>
              <div key={i} className="min-w-1/3 flex flex-col gap-1 bg-slate-800 p-4 rounded-lg">
                <div className="flex justify-between">
                  <span>Awesome Game</span>
                  <span className="text-slate-400">2 May</span>
                </div>
                <div className="flex text-xs text-yellow-300 items-center">
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i>
                  <span className="ml-auto text-sm text-slate-400">Noob Master</span>
                </div>
                <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum sed ducimus rerum minima deleniti neque facilis fuga molestiae ex eveniet nam porro repellendus tenetur, placeat accusantium itaque ut qui consequatur.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas perspiciatis incidunt earum! Aut quidem ad optio non iste dicta aspernatur mollitia eos enim eum nisi voluptatem, facilis nulla, assumenda est.
                  {i == 1 && <>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, expedita? Inventore qui eaque incidunt nemo! Amet fugit officia minima, corrupti, dolores quibusdam blanditiis adipisci earum asperiores dignissimos vero tenetur sapiente.</>}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="border-t py-5 border-slate-800">
          <article className="text-xl my-5 font-semibold">Developer Information</article>
          <div className="flex gap-16">
            <div className="flex flex-col">
              <span>Website</span>
              <a>Flow Games Inc.</a>
              <a className="flex gap-3 items-center cursor-pointer w-40 border-t py-2 mt-7 border-slate-600 text-cyan-500 hover:text-cyan-400">
                <i className="fa-solid fa-book-open"></i>Privacy Policy
              </a>

            </div>
            <div className="flex flex-col">
              <span>Contact</span>
              <a>developer@flowgames.com</a>
              <a className="flex gap-3 items-center cursor-pointer border-t py-2 mt-7 border-slate-600 text-cyan-500 hover:text-cyan-400">
                <i className="fa-regular fa-file-lines"></i>License Agreement
              </a>
            </div>
          </div>
        </div>

      </section>

    </Layout>
  )
}