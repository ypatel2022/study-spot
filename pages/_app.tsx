import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  // var cors = require("cors");
  // //@ts-ignore
  // App.use(cors());
  return <Component {...pageProps} />;
}
