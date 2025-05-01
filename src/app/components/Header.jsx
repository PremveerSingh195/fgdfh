import React from "react";
import Burger from "../icons/Burger";
import HamburgerMenu from "./HamburgerMenu";

const data = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "About",
  },
  {
    id: 3,
    name: "Properties",
  },
  {
    id: 4,
    name: "Services",
  },
  {
    id: 5,
    name: "Contact",
  },
];

function Header() {
  return (
    <div className="bg-[#182059] w-screen h-16 p-1  flex flex-row justify-between items-center text-white">
      <img
        src="/logo.png"
        alt="logo"
        className="lg:w-[120px] w-20 h-20 lg:h-[120px] lg:ml-6 ml-3 flex mt-4"
      />
      <div className="md:flex hidden flex-row justify-center items-center gap-5">
        {data.map((item) => (
          <h1 className="text-xl font-medium" key={item.id}>
            {item.name}
          </h1>
        ))}
      </div>
      <div className="hidden md:flex  flex-row justify-center items-center gap-3 mt-1">
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://hancockogundiyapartners.com/wp-content/uploads/2019/07/dummy-profile-pic-300x300.jpg"
            alt="image"
            className="w-10 h-10"
          />
          <h2>Asif Nawaz</h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://hancockogundiyapartners.com/wp-content/uploads/2019/07/dummy-profile-pic-300x300.jpg"
            alt="image"
            className="w-10 h-10"
          />
          <h2>Asif Nawaz</h2>
        </div>
      </div>
      <div className="flex md:hidden mr-3">
        {/* <Burger /> */}
        <HamburgerMenu />
      </div>
    </div>
  );
}

export default Header;
