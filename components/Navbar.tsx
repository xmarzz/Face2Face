"use client";
import beardman from "@/public/beardman2.svg";
import Image from "next/image";
import Menu from "@/public/menu-bar.png";
import Cross from "@/public/cross.svg";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div className="navbar flex justify-between m-2 border-black border-1">
      <div className="mt-0">
        <Image src={beardman} width={74} height={75} alt="beardman" />
      </div>
      <div className="my-3 font-bold font-Candal font-semibold uppercase text-4xl">
        <h1 className="">Face 2 Face</h1>
      </div>
      <div className="max-lg:hidden flex justify-between mx-2 mt-6 text-xl space-x-16">
        <Link href="/" className="nav-items">
          Home
        </Link>
        <Link href="/whychooseus" className="nav-items">
          why choose us
        </Link>
        <Link href="/beautytips" className="nav-items">
          beauty tips
        </Link>
      </div>
      <div className="mt-3 hidden max-lg:block">
        {!isMenu && (
          <Image
            src={Menu}
            width={48}
            height={47}
            alt="Menu"
            id="menu-bar"
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        )}
        {isMenu && (
          <Image
            src={Cross}
            width={35}
            height={35}
            alt="cross"
            onClick={toggleMenu}
            className="mt-2 mr-2 max-lg:block cursor-pointer"
          />
        )}
       
        {isMenu && (
         <div className='menu-popup'>
            <Link href="/" className="nav-items" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/whychooseus" className="nav-items" onClick={toggleMenu}>
              why choose us
            </Link>
            <Link href="/beautytips" className="nav-items" onClick={toggleMenu}>
              beauty tips
            </Link>
          </div>
        )}
        
      </div>
    </div>
  );
}




