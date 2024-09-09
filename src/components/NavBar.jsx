import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "./index.js";
import logo from "../assets/logo.png";
import menuIcon from "../assets/menu.svg"; // Add your menu icon import

const NavBar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="aibank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-[color:#B76E79]"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => {
              setActive(nav.title);
              setToggle(false); // Close the menu when an item is clicked
            }}
          >
            <Link to={`#${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <ul className="list-none flex justify-end items-start flex-1 flex-col">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
              onClick={() => {
                setActive(nav.title);
                setToggle(false); // Close the menu when an item is clicked
              }}
            >
              <Link to={`#${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sm:hidden flex items-center">
        <button
          type="button"
          className="p-2"
          onClick={() => setToggle(!toggle)}
        >
          <img src={menuIcon} alt="menu" className="w-[24px] h-[24px]" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
