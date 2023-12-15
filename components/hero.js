import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import Link from "next/link";

const Hero = () => {
  const [product, setProduct] = useState('business');
  const products = ['design', 'product', 'business'];
  useEffect(() => {
    const changeProduct = () => {
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      setProduct(randomProduct);
    };
    changeProduct();
    const intervalId = setInterval(changeProduct, 1000);
    return () => clearInterval(intervalId);
  }, [products]);


  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Facilitate the seamless sale of your {product}.
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              our platform serves as a bridge between business owners looking to sell their ventures and qualified buyers seeking profitable opportunities. By leveraging cutting-edge technology and a user-friendly interface, Bizlink streamlines the business transaction process, connecting passionate entrepreneurs and fostering economic growth.
            </p>
            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
             
             <Link href="/listing"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
              
                Click to sell a {product}
              
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
export default Hero;