import React, { useState, useEffect } from 'react'
import { BsBoxArrowUpRight } from "react-icons/bs"
import { AiOutlineRight } from "react-icons/ai";
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default function Home() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className='relative  '>
        <img className='w-full brightness-50 min-h-[500px]  h-[70vh]' src="image.jpeg" />
        <div className='absolute top-[0vh] w-full  '>
          <Header className="h-[10vh] " />
        </div>

        <div class="absolute text-white top-[12vh] md:top-40  w-[60vw] ml-[15vw] ">

          <p className='font-playfair-display text-5xl lg:text-8xl flex mx-auto'>Mikail Ekmen.</p>
          <p className='font-playfair-display text-md lg:text-xl mt-4 md:mt-8 max-w-[70vw]'>As a skilled interior designer, I am dedicated to turning ideas into innovative living spaces. Explore my latest
            projects and articles, shawcasing my expertise in Photoshop and 3Dmax.</p>
          <br />
          <br />
          <br />
          <div className='mx-auto  flex'>

            <button className='bg-white text-center rounded-md text-black px-4 py-2 mr-8  flex'>
              Resume
              <BsBoxArrowUpRight className=' ml-2 h-4 font-bold mt-1 w-4' />
            </button>
            <button className='underline decoration-2 font-semibold  text-xl'>
              <Link to="/contact"> Contact
              </Link> </button>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-9 lg:min-h-[350px] lg:h-[34vh] mb-12 ">
        <div class="md:col-start-1 md:ml-24 md:col-span-3 col-span-9 flex ">
          <img className='rounded-lg mt-16 w-[200px]  mx-auto my-auto ' src="mikailekmen.png" />
        </div>
        <div class="md:col-span-4 col-span-9 text-start content-center ...">
          <div class="flex  grid gap-4 content-start ...">
            <div className='w-[100%] mx-auto mt-20 mb-4 leading-8 md:px-4 px-12'>
              As a skilled interior design, I innovative living spaces. Explore my latest projects and articles, shawcasing my expertise in Photoshop and 3Dmax.
              Lorem Ipsum is simply dummy text of the printing and typesetas been the indusdesktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.edicated to turning idead into innovative living spaces. Explore my latest projects and articles, shawcasing my expertise in Photoshop and 3Dmax.
            </div>
          </div>
        </div>
      </div>

      <div className='h-[50vh] w-full bg-black m-0 flex'>
        <span className='text-white font-playfair-display text-center mx-auto text-md md:text-4xl mt-[20vh]'>
          "Explore the latest"  <br></br>
          <br></br>
          -Mikail Ekmen
        </span>
      </div>

      {/* CARDS */}

      <div className='flex mb-4 mt-24'>



        <span className=' text-xl mx-auto font-semibold '>
          <Link className='flex' to='/portfolio'>
            See All Projects <AiOutlineRight className='mt-1.5 ' />
          </Link>
        </span>



      </div>

      <div class=" w-[70vw] ml-[15vw] grid md:grid-cols-3 grid-cols-1  gap-4 mb-24 mx-4">
        <div class=" col-span-1 ...">
          <div>
            <img class="h-auto  rounded-lg" src="project-1.png" alt="" />
          </div>
        </div>
        <div class="col-span-1  ...">    <div>
          <img class="h-auto  rounded-lg" src="project-2.png" alt="" />
        </div></div>
        <div class="col-span-1  ...">    <div>
          <img class="h-auto rounded-lg" src="project-3.png" alt="" />
        </div></div>
      </div>
    </>
  )
}
