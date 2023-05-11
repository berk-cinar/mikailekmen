import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'
import Header from '../components/Header'
import Home from '../pages/Home'
import About from '../pages/About'
import Footer from '../components/Footer'

export default function ApplicationRoutes() {
  return (
        <BrowserRouter>
       {/*  <Header className="h-[10vh]"/> */}
            <Routes>
                    <Route path='/'  element={<Home/>}/>
                    <Route path='/portfolio' element={<Portfolio/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/about' element={<About/>}/>
            </Routes> 
            <Footer/>
        </BrowserRouter>
  )
}
