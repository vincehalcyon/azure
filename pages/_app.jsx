import "tw-elements/dist/css/tw-elements.min.css";
import "@/styles/globals.css";
import "@/styles/customs.css";
import DefaultLayout from "@/components/_layout/DefaultLayout";
import globalState from "@/lib/store/globalState";
import persistentStore from "@/lib/store/persistentStore";
import globalData from "@/lib/preBuildScripts/static/globalData.json";
import { GlobalContext } from "@/lib/context/GlobalContext";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  const { page } = pageProps;
  useEffect(() => {
    globalState.setState({ ready: true });
    const locale = page?.locale;
    if (locale) persistentStore.setState({ locale });
    const handleScroll = () => {
      globalState.setState({ showLazy: true });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, [page]);
  return (
    <GlobalContext.Provider value={{ ...globalData }}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </GlobalContext.Provider>
  );
}
