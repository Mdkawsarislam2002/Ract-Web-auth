import React, { useState, useContext } from "react";
import SideBar from "./SideBar";
import NewContext from "../Context/NewContext";
import { NavLink, Link } from "react-router-dom";
const Nav = () => {
  //  contex
  const UserInputValue = useContext(NewContext);
  const [menuState, setMenuState] = useState(false);
  const menuTrigger = () => {
    setMenuState((menuState) => !menuState);
  };
  let toggleStyle = menuState ? "squce" : "";

  //   side bar
  const [menuToggle, setMenuToggle] = useState(false);
  const MenuHandler = () => {
    setMenuToggle((menuToggle) => !menuToggle);
  };
  let compStyle = menuToggle ? "menuToggleBtn" : "menuToggleBtnReverse";

  return (
    <>
      <nav className="dark:bg-gray-800 bg-white shadow">
        <div className="container px-6 py-4 mx-auto">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold text-gray-700">
                <Link
                  to={"/"}
                  className="dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300 text-2xl font-bold text-gray-800 transition-colors duration-200 transform"
                >
                  KIY
                </Link>
              </div>

              <div onClick={menuTrigger} className="md:hidden flex">
                <button
                  type="button"
                  className="dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 text-gray-500"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div
              className={` h-full w-full  transition-all duration-300 md:flex md:items-center md:justify-between flex-1 ${toggleStyle}`}
            >
              <div className="md:flex-row md:items-center md:mx-8 flex flex-col -mx-4">
                <Link
                  to={"/aboutus"}
                  className="md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md"
                >
                  About Us
                </Link>
                {/* <a
                  href="#"
                  className="md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md"
                >
                  Browse Topics
                </a> */}
                {/* <a
                  href="#"
                  className="md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md"
                >
                  Random Item
                </a> */}
                <NavLink
                  to={"/firstpage"}
                  href="#"
                  className="md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md"
                >
                  Log Out
                </NavLink>
              </div>

              <div className="md:mt-0 flex justify-end items-end mt-4">
                <button
                  className="md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none hidden mx-4 text-gray-600 transition-colors duration-200 transform"
                  aria-label="show notifications"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button
                  onClick={MenuHandler}
                  type="button"
                  className="focus:outline-none flex items-center"
                  aria-label="toggle profile dropdown"
                >
                  <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                    <img
                      src={UserInputValue.UserImg}
                      className="object-cover w-full h-full"
                      alt="avatar"
                    />
                  </div>

                  <h3 className="dark:text-gray-200 md:hidden mx-2 text-sm font-medium text-gray-700">
                    {UserInputValue.UserName}
                  </h3>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={` transition-all duration-200 ${compStyle}`}>
            <SideBar />
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
