import Head from "next/head";
import Hero from "../components/hero";
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
const Home = () => {
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
        src="https://www.googletagmanager.com/gtag/js?id=GTM-P4PBHBCT"
    />
    <script
        dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'GTM-P4PBHBCT');
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

      <SectionTitle
        pretitle="Testimonials"
        title="Customer Success Stories">
        Discover how Bizzlink has empowered entrepreneurs and investors on their business journey. Here are inspiring stories from our users:
      </SectionTitle>
      <Testimonials />
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