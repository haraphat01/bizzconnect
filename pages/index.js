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

const Home = () => {
  return (
    <>
      <Head>
        <title>Bizlink</title>
        <meta
          name="description"
          content="Bizlink is a dynamic online platform designed to facilitate the seamless sale of businesses."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <Hero />
      <SectionTitle
        title="Recently listed business"
        >
      </SectionTitle>
    <Products/>
    
     
          
    
      <Benefits data={benefitOne} />

      <SectionTitle
        pretitle="Testimonials"
        title="Customer Success Stories">
        Discover how Bizlink has empowered entrepreneurs and investors on their business journey. Here are inspiring stories from our users:
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
      </SectionTitle>
      <Faq />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;