import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Dashboard from "../components/master/dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLoadingScreen from "@/zustand/loadingScreen";
import LoadingScreen from "@/components/loading/LoadingScreen";

export default function App({ Component, pageProps }: AppProps) {
  const { showLoadingScreen } = useLoadingScreen((state) => state);

  return (
    <Dashboard>
      <LoadingScreen show={showLoadingScreen} />
      <Component {...pageProps} />
      <ToastContainer />
    </Dashboard>
  );
}
