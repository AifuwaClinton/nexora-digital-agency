
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import WhatWeDo from './components/WhatWeDo';
import OurTeam from './components/OurTeam';
import Footer from './components/Footer';
import About from './components/About';
import LoadingScreen from './components/LoadingScreen';

function App() {

  // Remember the user's theme//
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Control the loading screen //
  const [isLoading, setIsLoading] = useState(true);

  // Apply and  save the them //
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")

    localStorage.setItem("theme", theme)
  },[theme]);

  //   Show loading screen first //
  if (isLoading) {
    return <LoadingScreen setIsLoading ={setIsLoading} theme={theme}/>
  }


  //  Show the  actual website //
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