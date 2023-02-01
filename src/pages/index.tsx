import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Image from "next/image";
import reactLogo from "../assets/react.svg";
import tauriLogo from "../assets/tauri.svg";
import nextLogo from "../assets/next.svg";

import Banner from "../components/Banner/Banner";
import SuggestCard from "../components/Card/SuggestCard";
import RightSideBar from "../components/RightSideBar";
import { Sidebar } from "../components/SideBar/Sidebar";

function App() {
  useEffect(() => {
    invoke("greet", { name: "World" }).then(console.log).catch(console.error);
  }, []);

  return (
    <Sidebar>
      <div>
        <div className="flex rounded-xl w-full">
          <Banner />
          <RightSideBar />
        </div>
        <SuggestCard />
      </div>
    </Sidebar>
  );
}

export default App;
