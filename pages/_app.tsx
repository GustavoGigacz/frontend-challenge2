import GlobalStyle from "../styles/global";

import type { AppProps } from "next/app";
import Variables from "../styles/variables";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Variables />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
