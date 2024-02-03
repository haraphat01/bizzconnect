"use client"
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react"
import { Provider } from 'jotai'

import "../css/tailwind.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
