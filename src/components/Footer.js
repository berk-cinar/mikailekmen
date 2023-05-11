import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div>
      <div>
        <div class="pt-16 text-center   bg-black mx-auto">

          <div className='grid grid-cols-1   content-center grid-cols-3  md:grid-cols-5   mx-auto  text-white text-center gap-10'>
            <div className='gap-2 md:col-start-2 mx-auto   w-[130px] lg:w-[180px]  '>
              <div className=' text-center  inline-flex items-center'>
                <img className='w-[200px]  lg:w-[400px]  mx-auto  pb-10 ' src="mikailekmen-black.png" /><br />
            
              </div>
            </div>
            <div className='gap-2     '>
              <p class="font-bold text-md mb-4 text-white">ME-ARCHITECT </p>
              <Link to="/" class="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">
                Home</Link>
              <Link to="/portfolio" class="block py-2 pr-4 pl-3    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">
                Portfolio</Link>
              <Link to="/contact" class="block py-2 pr-4 pl-3    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">
                Contact</Link>
              <Link to="/about" class="block py-2 pr-4 pl-3    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">
                About</Link>
            </div>

            <div className='gap-2 mx-auto     '>
              <p class="font-bold text-md mb-4 text-white">FOLLOW </p>
              <div class="col-span-2 flex gap-4 text-white lg:col-span-5">
                <a class="hover:opacity-75" href="https://www.facebook.com/mikail.ekmen/" target="_blank" rel="noreferrer">

                  <svg
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>

                <a class="hover:opacity-75" href="https://www.instagram.com/mik.olangelo/" target="_blank" rel="noreferrer">
                  <span class="sr-only"> Instagram </span>

                  <svg
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>



              </div>
            </div>
          </div>
          <div class=" w-[70vw] ml-[15vw]  py-2">
            <div class="lg:flex lg:gap-8">
              <div
                class="mt-2 grid grid-cols-2 gap-2 lg:mt-0 lg:grid-cols-5 lg:gap-y-16"
              >
                <div class="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                  <form class="w-full text-white">

                  </form>
                </div>


              </div>
            </div>

            <div class="mt-4 border-t border-white/10 pt-2">
              <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
                <p class="text-center text-xs text-white lg:text-left">
                  Copyright &copy; 2022. CNR Information Technologies. All rights reserved.
                </p>

                <nav
                  class="flex justify-center gap-x-4 text-xs text-white lg:justify-end"
                >
                  <a> Terms & Conditions </a>
                  <a> Privacy Policy </a>
                  <a> Cookies </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer