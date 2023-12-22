"use client"
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"
import ThemeChanger from "./DarkSwitch";
import axios from 'axios';
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import next from "next";
import { Button, FloatButton } from "antd";

const Navbar = () => {
  const { status, data: session } = useSession();
  console.log(status)
  const navigation = [
    "Product",
    "Company",

  ];

  // const handleGoogleSignIn = async () => {
  //   const { data: session } = useSession(); // Access the session data
  
  //   if (session) {
  //     const { email, name } = session.user; // Extract email and name from the session
  //     try {
  //       // Call the userApi endpoint to save the user data
  //       await axios.post('/api/userApi', { email, name });
  //     } catch (error) {
  //       console.error('Error saving user data: ', error);
  //     }
  //   } else {
  //     // If the session is not available, initiate Google sign-in
  //     await signIn("google");
  //   }
  // };

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>

                    </span>
                    <span>Bizlink</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href="/" className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                        {item}
                      </Link>
                    ))}
                    <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">
                      Get Started
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href="/" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          {/* {console.log(session)} */}
          {status === "authenticated" ? (
            <>

              <button onClick={() => signOut()} className="px-6 py-2 text-white bg-red-500  rounded-md md:ml-5">Log out</button>
            </>
          ) : (
            <>
              <Button onClick={() => signIn("google")} className="px-6 py-2 text-white bg-indigo-500 rounded-md md:ml-5">
                Log in
              </Button>
              <ThemeChanger />
            </>
          )}

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
