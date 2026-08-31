
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import WhatWeDo from './components/WhatWeDo';
import OurTeam from './components/OurTeam';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  },[theme]);

  return (
    <div className='min-h-screen  bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white'>
      <Navbar theme={theme} setTheme={setTheme}/>
      <div className='pt-20 '>
      <Hero/>
      </div>
      <About/>
      <FeaturedWork/>
      <WhatWeDo/>
      <OurTeam/>
      <Footer/>
    </div>
  )
}

export default App;