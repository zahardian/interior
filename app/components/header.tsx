"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <div className="fixed z-50 w-full">
        {/* header */}
        <header className="py-4 shadow-sm bg-white">
          <div className="container flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              <h1>
                Zaza<span className="text-primary">terior</span>
              </h1>
            </Link>

            <div className="w-full max-w-xl relative lg:flex hidden">
              <span className="absolute left-4 top-3 text-lg text-gray-400">
                <Image
                  src="/search-outline.svg"
                  width={25}
                  height={25}
                  alt="search"
                />
              </span>
              <input
                type="text"
                className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
                placeholder="search"
              />
              <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">
                Search
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-center text-gray-700 hover:text-primary transition relative"
              >
                <div className="text-lg md:text-2xl">
                  <Image
                    src="/heart-outline.svg"
                    width={25}
                    height={25}
                    alt="heart"
                    className="ml-3"
                  />
                  <p className="text-xs leading-3">Wish List</p>
                </div>
                <span className="absolute left-6 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                  8
                </span>
              </Link>
              <Link
                href="/"
                className="text-center text-gray-700 hover:text-primary transition relative"
              >
                <div className="text-lg md:text-2xl">
                  <Image
                    src="/bag-outline.svg"
                    width={25}
                    height={25}
                    alt="bag"
                  />
                  <p className="text-xs leading-3">Cart</p>
                </div>
                <span className="absolute left-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                  2
                </span>
              </Link>
              <Link
                href="/"
                className="text-center text-gray-700 hover:text-primary transition relative"
              >
                <div className="text-lg md:text-2xl">
                  <Image
                    src="/person-outline.svg"
                    width={25}
                    height={25}
                    alt="person"
                    className="ml-2"
                  />
                  <p className="text-xs leading-3">Account</p>
                </div>
              </Link>
            </div>
          </div>
        </header>

        {/* navbar */}
        <nav className="bg-gray-800 py-4">
          <div className="container flex justify-between">
            {/* all category */}
            <div className="px-3 py-2 md:px-5 md:py-4 bg-primary flex items-center cursor-pointer relative group">
              <span className="text-white">
                <Image
                  src="/icons8-menu.svg"
                  width={15}
                  height={15}
                  alt="menu"
                />
              </span>
              <span className="capitalize ml-2 text-white">All Categories</span>
              <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-500 invisible group-hover:visible">
                <Link
                  href="/"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <Image
                    src="/sofa.svg"
                    width={5}
                    height={5}
                    alt="sofa"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <Image
                    src="/bed.svg"
                    width={5}
                    height={5}
                    alt="bedroom"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="ml-6 text-gray-600 text-sm">Bedroom</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <Image
                    src="/office.svg"
                    width={5}
                    height={5}
                    alt="office"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="ml-6 text-gray-600 text-sm">Office</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <Image
                    src="/outdoor-cafe.svg"
                    width={5}
                    height={5}
                    alt="outdoor"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <Image
                    src="/bed-2.svg"
                    width={5}
                    height={5}
                    alt="mattress"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="ml-6 text-gray-600 text-sm">Mattress</span>
                </Link>
              </div>
            </div>

            {/* navbar links */}
            <div className="md:flex items-center justify-between flex-grow pl-12 hidden">
              <div className="flex items-center space-x-6 capitalize">
                <Link
                  href="/"
                  className={`${
                    pathname === "/" ? "text-primary" : "text-white"
                  } transition`}
                >
                  Home
                </Link>
                <Link
                  href="/shop"
                  className={`${
                    pathname === "/shop" ? "text-primary" : "text-white"
                  } transition`}
                >
                  Shop
                </Link>
                <Link
                  href="/about"
                  className={`${
                    pathname === "/about" ? "text-primary" : "text-white"
                  } transition`}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className={`${
                    pathname === "/contact" ? "text-primary" : "text-white"
                  } transition`}
                >
                  Contact Us
                </Link>
              </div>
              <div className="space-x-4">
                <Link
                  href="/login"
                  className="text-gray-200 hover:text-white transition"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="text-gray-200 hover:text-white transition border rounded p-2"
                >
                  Register
                </Link>
              </div>
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="text-white md:hidden text-xl"
            >
              {open ? <HiMenuAlt3 size={22} /> : <HiX size={22} />}
            </button>
          </div>

          {/* <div>
            <div className="flex flex-col gap-4 py-2 pt-8 text-center capitalize">
              <Link href="/" className="text-gray-200 hover:text-white transition">
                Home
              </Link>
              <Link
                href="/shop"
                className="text-gray-200 hover:text-white transition"
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="text-gray-200 hover:text-white transition"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-gray-200 hover:text-white transition"
              >
                Contact Us
              </Link>
              <Link
                href="/login"
                className="text-gray-200 hover:text-white transition"
              >
                Login/Register
              </Link>
            </div>
          </div> */}
        </nav>
        <div className={`bg-gray-800 md:hidden ${open ? "hidden" : "block"}`}>
          <div className="text-center items-center justify-between flex-grow ">
            <div className="justify-center items-center capitalize pt-2 pb-8">
              <ul className="pb-8 space-y-2">
                <li>
                  <Link
                    href="/"
                    className={`${
                      pathname === "/" ? "text-primary" : "text-white"
                    } transition`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop"
                    className={`${
                      pathname === "/shop" ? "text-primary" : "text-white"
                    } transition`}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`${
                      pathname === "/about" ? "text-primary" : "text-white"
                    } transition`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`${
                      pathname === "/contact" ? "text-primary" : "text-white"
                    } transition`}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
              <div className="space-x-4">
                <Link
                  href="/login"
                  className="text-gray-200 hover:text-white transition"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="text-gray-200 hover:text-white transition border rounded p-2"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
