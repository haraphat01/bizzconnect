import Head from "next/head";
import Hero from "../components/hero";
import React, { useState, useEffect } from 'react';
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Products from "../components/products";

import { benefitOne } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import { Button } from "antd";
import Layout from "../components/Layout";
import WelcomeMessage from "../components/welcomeMessage";
const Home = () => {
  const [isNewUser, setIsNewUser] = useState(true);
  useEffect(() => {
    // Check if the user has visited the site before by checking local storage or cookies
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');

    if (hasVisitedBefore) {
      setIsNewUser(false);
    } else {
      // If it's the first visit, set the flag in local storage or cookies
      localStorage.setItem('hasVisitedBefore', true);
    }
  }, []);

  if (isNewUser) {
    return (
      <WelcomeMessage/>
    )
 
  } 

return (

  <>
    <Layout>
      <Head>
        <title>Bizzlink</title>
        <meta
          name="description"
          content="Bizzlink is a dynamic online platform designed to facilitate the seamless sale of businesses."
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
            `,
          }}
        />


      </Head>

      {/* <Navbar /> */}

      <Hero />
      <SectionTitle
        title="Recently listed business"
      >
      </SectionTitle>
      <Products />




      <Benefits data={benefitOne} />

      {/* <SectionTitle
          pretitle="Testimonials"
          title="Customer Success Stories">
          Discover how Bizzlink has empowered entrepreneurs and investors on their business journey. Here are inspiring stories from our users:
        </SectionTitle>
        <Testimonials /> */}
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
      </SectionTitle>
      <Faq />
      {/* <Footer /> */}
      <PopupWidget />
    </Layout>
  </>
);
}

export default Home;