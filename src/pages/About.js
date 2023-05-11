import React from 'react'
import { MdArchitecture } from "react-icons/md";
import { SiMaterialdesignicons, SiAntdesign } from "react-icons/si";
import { RiImageEditLine } from "react-icons/ri";
import { MdOutlineDesignServices } from "react-icons/md";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Header from '../components/Header';

export default function About() {
  return (
    <div>
      <div className='bg-black'>
        <Header />
      </div>
      <main className=" bg-white px-10  md:px-20 lg:px-40">
        <section className="min-h-[85vh]">

          <div className="text-center p-10 py-10">
            <h2 className="text-5xl pt-4 text-gray-900 font-medium  md:text-6xl">
              Mikail Ekmen
            </h2>
            <h3 className="text-2xl py-6  md:text-3xl">
              Interior Architect
            </h3>
            <div className="text-md pt-4 leading-8 text-gray-800  max-w-xl mx-auto md:text-xl">
              I blend plain and minimal architecture with linear geometries and get results.
            </div>
            <div className="text-5xl flex justify-center gap-16 py-8 text-gray-600">

              <a href="https://www.linkedin.com/in/mikail-ekmen/">
                <AiFillLinkedin />

              </a>
              <a href="https://www.instagram.com/mik.olangelo/">
                <AiFillInstagram />
              </a>
              <a href="https://www.facebook.com/mikail.ekmen/">
                <AiFillFacebook />
              </a>

            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full max-w-[15rem] max-h-[15rem]  w-80 h-80 relative overflow-hidden mt-20 md:h-70 md:w-70">
              <img src="pp.png" layout="fill" objectFit="cover" />

            </div>
          </div>
        </section>
        <section>
          <div>
            <div className="text-md flex leading-8 max-w-5xl mx-auto text-gray-800">
              <ul className="mx-auto max-w-[38rem]">
                <div className="lg:pl-16 pl-12 md:pl-48 ">
                  <h3 className="text-3xl pb-3 my-4   ">Project Experiences</h3>
                  <li> &#8227;
                    Arka Works - Design Internship
                  </li>
                  <li>  &#8227;
                    Mukas Engineering & Architecture - Building Site Internship</li>
                  <li> &#8227; 5D Interior Architecture - Office Internship</li>
                  <li> &#8227; Sunglasses Hut - Sales representative
                  </li>

                </div>
              </ul>
            </div>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  flex-1">
              <MdArchitecture className='w-20 h-20 mx-auto' />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Skills <br></br>
              </h3>
              <div className="py-2 ">
                Im using different languages and tools with best fit to project.
              </div>
              <div className="text-gray-800   py-1">Interior Architecture</div>
              <div className="text-gray-800   py-1">Design</div>
              <div className="text-gray-800   py-1">3D Modeling</div>

            </div>

            <div className="text-center  shadow-lg p-10 rounded-xl my-10 flex-1">
              <RiImageEditLine className='w-20 h-16 mx-auto' />
              <h3 className="text-lg font-medium pt-8 pb-2 lg:pb-8 ">UI Libraries</h3>
              <div className="py-2">
                Im using last technology UI libraries for the project
              </div>
              <div className="text-gray-800 py-1">BootStrap</div>
              <div className="text-gray-800 py-1">ReactStrap</div>
              <div className="text-gray-800 py-1">TailwindCSS</div>
              <div className="text-gray-800 py-1">Metarial Design</div>
            </div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10  flex-1">
              <MdOutlineDesignServices className='w-20 h-16 mx-auto' />
              <h3 className="text-lg font-medium pt-8 pb-2 lg:pb-8 ">
                Design Tools
              </h3>
              <div className="py-2 ">
                Creating elegant designs suited for the project needs following core
                design theory.
              </div>

              <div className="text-gray-800  py-1">3Ds Max</div>
              <div className="text-gray-800 py-1">Photoshop</div>
              <div className="text-gray-800 py-1">Sketchup</div>
              <div className="text-gray-800  py-1">AutoCAD</div>
              <div className="text-gray-800  py-1">Lumion</div>
              <div className="text-gray-800  py-1">MS Office</div>
            </div>
          </div>

        </section>


      </main>
    </div>
  )
}
