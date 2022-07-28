import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaDog } from "react-icons/fa";

import Button from "./button";

export default function Navbar() {
  let links = [
    { name: "HOME", link: "/" },
    { name: "SERVIÇOS", link: "#services" },
    { name: "SOBRE", link: "#about" },
    { name: "CONTATOS", link: "#contacts" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <nav className="shadow-sm w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-orange-700 py-4  md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-white">
          <span className="text-3xl text-white mr-2 pt-2">
            <FaDog className="mb-4" />
          </span>
          Afetto
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <ul
          className={`md:flex bg-slate-900 md:bg-orange-700 md:items-center md:pb-0 py-2  absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 opacity-80" : "top-[-480px]"
          } `}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-white text-xl md:my-0 my-7 hover:bg-orange-900 md:hover:text-slate-900 md:hover:bg-transparent md:hover:px-0 hover:px-2 md:py-0 py-2 duration-300 ease-in-out"
            >
              <Link href={link.link} className="text-gray-800 ">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
