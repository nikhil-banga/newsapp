import Head from "next/head";
import Link from "next/link";
import { useState } from "react";


import React from 'react'


const Navbar = () => {
  return (
    <div className="shadow">
      <header className="text-black  shadow-md  body-font font-semibold">
        <div className="container  mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <Link
            href="/general"
            className="flex mt-3 title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-indigo-700 font-bold text-xl">
              NewsApp
            </span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {/* <Link
              href=""
              className="mr-5 hover:font-bold hover:text-indigo-700"
            >
              First Link
            </Link> */}

            <Link
              href={"/general"}
              className="mr-5 hover:font-bold hover:text-indigo-700"
            >
              General
            </Link>
            <Link
              href={"/business"}
              className="mr-5 hover:font-bold hover:text-indigo-700"
            >
              Business
            </Link>
            <Link
              href={"/entertainment"}
              className="mr-5 hover:font-bold hover:text-indigo-700"
            >
              Entertainment
            </Link>
            <Link
              href="/science"
              className="mr-5 hover:font-bold hover:text-indigo-700"
            >
              Science
            </Link>
            <Link
              href="/technolgy"
              className="mr-5 hover:font-bold hover:text-indigo-700"
            >
              Technology
            </Link>
            <Link
              href={"/sports"}
              className="mr-5 hover:font-bold hover:text-indigo-700"
            >
              Sports
            </Link>
            <Link
              href={"/health"}
              className="mr-5 hover:font-bold hover:text-indigo-700"
            >
              Health
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar

