import type { AppProps } from "next/app";
import "../styles/globals.css";

// MSW
if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../../.mocks");
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
