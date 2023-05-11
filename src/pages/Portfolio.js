
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Header from '../components/Header';

export default function Portfolio() {

  
  const [projects, setProjects] = useState([])

  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    axios
      .get("projects.json")
      .then(res => {
        console.log(res.data)
        setProjects(res.data)
      }
      )

    return () => {

    }
  }, [])

  return (
    <div >
      <div className='w-full bg-black'>
      <Header/>
      </div>
      <section className="py-10">
      <div className='flex grid  grid-cols-2 mx-[4vw] mb-12'>
        {projects.map((a) =>
          <div class="bg-white  shadow m-1">
            <a href="#">
              <img src={a.img} alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"> {a.title}</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions
                of 2021 so far, in reverse chronological order.</p>
            </div>
          </div>

        )}
      </div>
      </section>
    </div>
  )
}
