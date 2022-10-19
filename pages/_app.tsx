import "../styles/fonts.css";
import "../styles/globals.css";
import "../styles/loading.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "../stores/store";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Provider store={store}>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="keywords"
            content="سیمکارت بازار, خرید سیمکارت همراه اول, خرید سیمکارت اعتباری, خرید سیمکارت دايمی, خرید سیمکارت ایرانسل, خرید سیمکارت رایتل"
          />
          <meta
            name="description"
            content="سفارش سیمکارت با ارزان ترین و سریع ترین زمان رسیدن"
          ></meta>
          <meta name="author" content="Radmehr Dehghani" />
          <title>سیمکارت بازار</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
