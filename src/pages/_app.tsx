import type { AppProps } from "next/app";

import "../style.css";
import "../App.css";
import "../index.css";

import Script from "next/script";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://kit.fontawesome.com/6be82c378c.js" crossOrigin="anonymous"></Script>
      <link rel="stylesheet" href="https://kit.fontawesome.com/6be82c378c.css" crossOrigin="anonymous"></link>
      <link
        href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
        rel="stylesheet" />
      <Component {...pageProps} />
    </>);
}
