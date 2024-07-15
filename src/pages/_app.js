import "@/styles/globals.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes'
import NextNProgress from 'nextjs-progressbar';
import Layout from "@/components/Layout";



export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
        duration: 800,
        once: false,
    })
  }, [])
  
  return(
    <ThemeProvider>
    <NextNProgress />

    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
  );
}
