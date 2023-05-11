
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

export default function Header() {

        const [isNavOpen, setIsNavOpen] = useState(false);

        return (
                <div className="flex items-center ml-2 md:ml-8 py-8">
                        <nav>
                                <section className="MOBILE-MENU flex lg:hidden ml-4">
                                        <div
                                                className="HAMBURGER-ICON space-y-2 text-white "
                                                onClick={() => setIsNavOpen((prev) => !prev)}
                                        >
                                                <span className="block h-0.5 w-8  bg-white"></span>
                                                <span className="block h-0.5 w-8  bg-white"></span>
                                                <span className="block h-0.5 w-8  bg-white"></span>
                                        </div>

                                        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                                                <div
                                                        className="absolute top-0 right-0 px-8 py-8"
                                                        onClick={() => setIsNavOpen(false)}
                                                >
                                                        <svg
                                                                className="h-8 w-8 text-gray-900"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                        >
                                                                <line x1="18" y1="6" x2="6" y2="18" />
                                                                <line x1="6" y1="6" x2="18" y2="18" />
                                                        </svg>
                                                </div>
                                                <ul onClick={() => setIsNavOpen(false)} className="flex flex-col items-center justify-between min-h-[250px]">
                                                       
                                                                <Link to="/" class="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">
                                                                        Home</Link>
                                                                <Link to="/portfolio" class="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">
                                                                        Portfolio</Link>
                                                                <Link to="/contact" class="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">
                                                                        Contact</Link>
                                                                <Link to="/about" class="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">
                                                                        About</Link>
                                                </ul>
                                        </div>
                                </section>

                                <ul className="DESKTOP-MENU hidden space-x-8 lg:flex  mr-8">
                               
                                                        <Link to="/" class="block py-2 pr-4 pl-3 mr-2 text-white text-xl   hover:underline decoration-4 underline-offset-8  lg:p-0 ">
                                                                Home</Link>
                                                        <Link to="/about" class="block py-2 pr-4 pl-3 text-white text-xl    hover:underline decoration-4 underline-offset-8  lg:p-0 ">
                                                                About</Link>
                                                
                                                <Link to="/portfolio" class="block py-2 pr-4 pl-3 text-white  text-xl     lg:border-0 hover:underline decoration-4 underline-offset-8 lg:p-0 ">
                                                                Portfolio</Link>
                                                <Link to="/contact" class="block py-2 pr-4 pl-3 text-white  text-xl   hover:underline decoration-4 underline-offset-8 lg:border-0 lg:p-0 ">
                                                                Contact</Link>
                                </ul>
                        </nav>
                        <style>{`
                .hideMenuNav {
                  display: none;
                }
                .showMenuNav {
                  display: block;
                  position: absolute;
                  width: 100vw;
                  height: 100vh;
                  top: 0;
                  left: 0;
                  background: white;
                  z-index: 10;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-evenly;
                  align-items: center;
                }
              `}</style>
                </div>


        )
}
