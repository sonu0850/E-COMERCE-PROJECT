import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import amazon from "../../../assets/amazon.png";
import { TiShoppingCart } from "react-icons/ti";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const NavbarReact = () => {
  const [open, setOpen] = useState(false);
  const myData = useSelector((state) => state.authSlice.CartData);
  const token = localStorage.getItem("token");
  console.log("tokenn", token);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const addtocard = () => {
    navigate("/Cart");
  };

  return (
    <header className={`flex w-full justify-center items-center bg-white dark:bg-dark`}>
      <div className="container">
        <div className="relative  flex  justify-center items-center">
          <div className="w-60 max-w-full px-4">
            <a href="/#" className="block w-full py-5">
              <NavLink to={"/"}>
                <div className="logo">
                  <img
                    src="https://sharpsheets.io/wp-content/uploads/2023/04/dominos_social_logo-1024x1024.jpg"
                    alt=""
                    width={130}
                  />
                </div>
              </NavLink>
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 z-50 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden bg-black`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white dark:bg-black"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white dark:bg-white"></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                {token && (
                  <ul className="block lg:flex">
                    <ListItem NavLink="/">Home</ListItem>
                    <ListItem NavLink="/About">About</ListItem>
                    <ListItem NavLink="/contact">Contact</ListItem>
                    <ListItem NavLink="/Service">Service</ListItem>
                    {token ? (
                     
                        
                        <button
                          className="p-1 rounded-xl px-3 ms-0 md:hidden text-white  bg-black"
                          onClick={()=>logout()}
                        >
                          Log Out
                        </button>
                     
                    ) : null}
                  </ul>
                )}
                {token? null :<div className="md:hidden mt-3 "> <NavLink to="/Login">
                    {" "}
                    <button className="p-1 rounded-xl px-3 text-white  bg-black">
                      Log In
                    </button>
                  </NavLink></div>}
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="/#"
                className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white"
              >
                {token ? (
                  <NavLink to="/Login">
                    {" "}
                    <button
                      className="p-1 rounded-xl px-3 text-white  bg-black"
                      onClick={logout}
                    >
                      Log Out
                    </button>
                  </NavLink>
                ) : (
                  <NavLink to="/Login">
                    {" "}
                    <button className="p-1 rounded-xl px-3 text-white  bg-black">
                      Log In
                    </button>
                  </NavLink>
                )}
              </a>
              {token && (
                <span onClick={addtocard} className="relative inline-block mt-4">
                  <TiShoppingCart className="text-3xl hidden md:block" />
                  <span className="absolute hidden md:block top-0 right-0  items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                    {myData.length}
                  </span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarReact;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};
