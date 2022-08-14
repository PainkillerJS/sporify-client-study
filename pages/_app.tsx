import { Provider } from "react-redux";

import "@assets/globals.scss";

import MainLayout from "@ui/Layout/MainLayout";

import store from "@store";

import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
};

export default MyApp;
