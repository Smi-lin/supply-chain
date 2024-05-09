"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-[#cfdee7]  sticky top-0 left-0 z-50 shadow-md  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 mr-9">
              <a href="/" className="text-[#212529]">
                CHAIN
              </a>
            </div>
            <div className="flex items-center mr-[20rem] justify-between ">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="/"
                    className="text-[#212529]   px-3 py-2 rounded-md text-sm font-medium "
                  >
                    Home
                  </a>
                  <a
                    href="/distributor"
                    className="text-[#212529] px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Distributor
                  </a>
                  <a
                    href="/manufacturer"
                    className="text-[#212529] px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Manufacturer
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-4">
          <Link href="/wallet">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-5 px-6 rounded-lg focus:outline-none focus:shadow-outline mt-8">
            Connect Wallet
          </button>
          </Link>
        </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="/Distributor"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Distributor
              </a>
              <a
                href="/Manufacturer"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Manufacturer
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
