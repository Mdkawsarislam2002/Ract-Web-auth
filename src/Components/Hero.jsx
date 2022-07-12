import React, { useContext, useState } from "react";
import "../style/toggle.css";
import ThreeMenu from "./svg components/ThreeMenu";
import Fb from "./svg components/Fb";
import Amazon from "./svg components/Amazon";
import Tesla from "./svg components/Tesla";
import Adobi from "./svg components/Adobi";
import SideBar from "./SideBar";
import DotMenu from "./svg components/DotMenu";
import NewContext from "../Context/NewContext";

const Hero = () => {
  const UserInputValue = useContext(NewContext);

  return (
    <>
      <section className="dark:bg-gray-800 relative bg-white">
        {/* <div  className="flex justify-end">
          <button className="hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 px-4 py-2 m-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md">
            <DotMenu />
          </button>
        </div> */}

        <div className="container px-6 py-16 mx-auto text-center">
          <div className="max-w-lg mx-auto">
            <h1 className="dark:text-white md:text-4xl text-3xl font-bold text-gray-800">
              Welcome Back mr. {UserInputValue.UserName}
            </h1>

            <p className="dark:text-gray-300 mt-6 text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              similique obcaecati illum mollitia.
            </p>

            <div className="dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-300 focus-within:ring-opacity-40 w-full max-w-sm mx-auto mt-6 bg-transparent border rounded-md">
              <form className="md:flex-row flex flex-col">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0 flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none"
                />

                <button
                  type="button"
                  className="hover:bg-blue-400 focus:outline-none focus:bg-blue-400 h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-blue-500 rounded-md"
                >
                  Join Us
                </button>
              </form>
            </div>
          </div>

          <div className="max-w-screen-xl mx-auto mt-20">
            <div className="md:grid-cols-6 lg:grid-cols-5 grid grid-cols-2 gap-8">
              <div className="md:col-span-2 lg:col-span-1 flex items-center justify-center col-span-1">
                <Fb />
              </div>

              <div className="md:col-span-2 lg:col-span-1 flex items-center justify-center col-span-1">
                <Amazon />
              </div>

              <Tesla />
              <div className="md:col-span-3 lg:col-span-1 flex items-center justify-center col-span-2">
                <Adobi />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
