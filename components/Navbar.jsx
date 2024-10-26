"use client"
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Logo */}
            <h1 className="text-white text-2xl font-bold">EcoDAO</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-thin text-lg">
            <a href="#dashboard" className="text-white hover:text-green-200">
              Dashboard
            </a>
            <a href="#explore" className="text-white hover:text-green-200">
              Explore EcoPools
            </a>
            <a href="#staking" className="text-white hover:text-green-200">
              Staking
            </a>
            <a href="#governance" className="text-white hover:text-green-200">
              Governance
            </a>
            <a href="#insurance" className="text-white hover:text-green-200">
              Insurance
            </a>
          </div>
            <button className="hidden md:flex bg-white text-xl text-green-600 px-4 py-2 rounded-md hover:bg-gray-200">
              Connect Wallet
            </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L12 10.586l6.293-6.293a1 1 0 011.414 1.414L13.414 12l6.293 6.293a1 1 0 01-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 12 4.293 5.707a1 1 0 010-1.414z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 6h18M3 12h18m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-500 p-4 space-y-2 text-xl font-thin">
          <a href="#dashboard" className="block text-white hover:text-green-200">
            Dashboard
          </a>
          <a href="#explore" className="block text-white hover:text-green-200">
            Explore EcoPools
          </a>
          <a href="#staking" className="block text-white hover:text-green-200">
            Staking
          </a>
          <a href="#governance" className="block text-white hover:text-green-200">
            Governance
          </a>
          <a href="#insurance" className="block text-white hover:text-green-200">
            Insurance
          </a>
          <button className="w-full bg-white text-green-600 px-4 py-2 rounded-md hover:bg-gray-200">
            Connect Wallet
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
