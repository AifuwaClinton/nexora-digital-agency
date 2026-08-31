import React from 'react'
import { useState } from 'react'
import assets from '../assets/assets'
import  moon from '../assets/moon-icon.svg'
import  sun from '../assets/sun-icon.svg'
import ToggleBtn from './ToggleBtn'


const Navbar = ({theme, setTheme}) => {
  const [menuOpen, setMenuOpen] =  useState(false);
  return (

    <nav className='fixed top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] '>
      <div className=' mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8 '>

       {/* LOGO */}
       <div className='flex items-center '>
        <img src={assets.logo} alt="" className='w-32 sm:w-36'/>

        <span className='hidden text-sm mt-2 font-semibold uppercase sm:block'>
          <span className='text-primary'>dig</span>
          <span className='text-gray-900 dark:text-white'>ital</span>
        </span>
       </div>

       {/* Navigation Links */}
       <div className='hidden items-center gap-8 md:flex'>
        <a href="#home" className='text-sm font-medium text-gray-700 transition hover:text-primary dark:text-gray-300 dark:hover:text-primary'>Home</a>
        <a href="#about" className='text-sm font-medium text-gray-700 transition hover:text-primary dark:text-gray-300 dark:hover:text-primary'>About</a>
        <a href="#work" className='text-sm font-medium text-gray-700 transition hover:text-primary dark:text-gray-300 dark:hover:text-primary'>Work</a>
        <a href="#services" className='text-sm font-medium text-gray-700 transition hover:text-primary dark:text-gray-300 dark:hover:text-primary'>Services</a>
        <a href="#team" className='text-sm font-medium text-gray-700 transition hover:text-primary dark:text-gray-300 dark:hover:text-primary'>Team</a>
       </div>

       {/* Theme Button */}
      <ToggleBtn theme={theme} setTheme={setTheme}/>

       {/*Connect Button  */}
       <div className='hidden items-center gap-2 rounded-full bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600 md:flex'>
       <a href="#connect">Connect</a>

       <img src={assets.arrow} alt="" className='w-4'/>
       </div>

       {/*Mobile Menu Button */}
       <button onClick={() => setMenuOpen(!menuOpen)} className='text-2xl md:hidden ' >
        
        <img src={menuOpen ? assets.close : assets.menu}
         alt={menuOpen ? "Close menu" : "Open menu"}  className='w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'/>
       </button>
       
       {/* Mobile Sidebar */}
       
        <div className={`fixed z-50 top-20 right-0 flex flex-col h-screen bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)]  w-64 gap-3 p-6 md:hidden dark:bg-gray-950 transition-transform duration-700 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
         
         <a href="#home" onClick={() => setMenuOpen(false)} className='text-sm font-medium rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-primary/10 hover:text-primary dark:text-gray-300 dark:hover:bg-primary/10 dark:hover:text-primary'>Home</a>
         <a href="#about" onClick={() => setMenuOpen(false)} className='text-sm font-medium rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-primary/10 hover:text-primary dark:text-gray-300 dark:hover:bg-primary/10 dark:hover:text-primary'>About</a>
         <a href="#work" onClick={() => setMenuOpen(false)} className='text-sm font-medium rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-primary/10 hover:text-primary dark:text-gray-300 dark:hover:bg-primary/10 dark:hover:text-primary'>Work</a>
         <a href="#services" onClick={() => setMenuOpen(false)} className='text-sm font-medium rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-primary/10 hover:text-primary dark:text-gray-300 dark:hover:bg-primary/10 dark:hover:text-primary'>Services</a>
         <a href="#team" onClick={() => setMenuOpen(false)} className='text-sm font-medium rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-primary/10 hover:text-primary dark:text-gray-300 dark:hover:bg-primary/10 dark:hover:text-primary'>Team</a>
         <a href="#connect" onClick={() => setMenuOpen(false)} className='mt-4 rounded-full text-sm font-medium px-5 py-2.5 text-center text-white bg-primary transition-colors hover:bg-primary/90'>Connect</a>
        </div>
       
      
      </div>
    </nav> 
    
    
  )
}


     

export default Navbar