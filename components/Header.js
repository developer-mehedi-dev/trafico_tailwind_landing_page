import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Nav from "./Nav";
import NavMobile from "./NavMobile";

import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Header = ({ headerData, navData }) => {
  const [toggle, setToggle] = useState(false);
  const [header, setHeader] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  const { logoImgV1, logoImgV2, btnText } = headerData;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header ? "bg-white p-3 rounded-md drop-shadow-primary" : "py-[40px]"
      }  fixed w-full left-0 right-0 max-w-[90vw] m-auto lg:max-w-[1120px] z-20 flex justify-between items-center trasnsition-all duration-500`}
    >
      <Link href={"/"}>
        <Image
          src={header ? logoImgV2 : logoImgV1}
          width={header ? 100 : 212}
          height={50}
          alt="logo"
        />
      </Link>
      {/* Desktop Navbar */}
      <div className="hidden lg:flex gap-x-[96px]">
        <Nav navData={navData} header={header} />
        <button className="btn">{btnText}</button>
      </div>

      {/* Mobile Navbar */}
      <div
        className="lg:hidden cursor-pointer"
        onClick={() => setNavMobile(!navMobile)}
      >
        <HiMenu className="text-4xl text-accent-hover" />
        {/* <HiMenu className="text-4xl text-accent-hover" /> */}
      </div>

      <div
        className={`${
          navMobile ? "max-h-[154px]" : "max-h-0"
        } lg:hidden absolute top-full left-0 mt-2 w-full overflow-hidden rounded-md shadow-2xl transition-all`}
      >
        <NavMobile navData={navData} />
      </div>
    </header>
  );
};

export default Header;
