import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("preline");
  }, []);

  return <Component {...pageProps} />;
}
