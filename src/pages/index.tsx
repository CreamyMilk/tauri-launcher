import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Image from "next/image";
import reactLogo from "../assets/react.svg";
import tauriLogo from "../assets/tauri.svg";
import nextLogo from "../assets/next.svg";

function App() {
  useEffect(() => {
    invoke("greet", { name: "World" }).then(console.log).catch(console.error);
  }, []);

  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    // setGreetMsg(await invoke("greet", { name }));
    let backdropData = await getBackdrops();
    console.log(backdropData);
  }
  const sendGraphQl = async (query) => {
    const headers = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    };
    const response = await fetch(
      "https://backdrop-api-prod.herokuapp.com/graphql",
      headers
    );
    const data = await response.json();
    let formatedData = JSON.stringify(data.data, null, 2);
    // console.log(formatedData);
    return data;
  };

  const getBackdrops = async () => {
    let data = await sendGraphQl(`
{
  getTrendingBackdrops(
    customLimit: 20
  ) {
    cursor
    backdrops {
      _id
      name
      address
       images{
         sourceId
        source
       }
      tagNames
    }
    totalCount
  }
}`);

    return data;
  };

  return (
    <div className="container">
      <h1>Ngamea 🐫 Games</h1>

      <div className="row">
        <span className="logos">
          <a href="https://nextjs.org" target="_blank">
            <Image
              width={144}
              height={144}
              src={nextLogo}
              className="logo next"
              alt="Next logo"
            />
          </a>
        </span>
        <span className="logos">
          <a href="https://tauri.app" target="_blank">
            <Image
              width={144}
              height={144}
              src={tauriLogo}
              className="logo tauri"
              alt="Tauri logo"
            />
          </a>
        </span>
        <span className="logos">
          <a href="https://reactjs.org" target="_blank">
            <Image
              width={144}
              height={144}
              src={reactLogo}
              className="logo react"
              alt="React logo"
            />
          </a>
        </span>
      </div>

      <p>Click on the Tauri, </p>

      <div className="row">
        <div>
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button type="button" onClick={() => greet()}>
            Greet
          </button>
        </div>
      </div>

      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
