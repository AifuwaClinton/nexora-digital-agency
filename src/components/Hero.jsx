import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <section id="home" className='mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24'>
        <div className='grid items-center gap-10 md:grid-cols-2 '>

            {/* Left side - Hero test */}
            <div className='max-w-2xl'>
                <p className=' mb-4 text-sm font-semibold uppercase tracking-widest text-primary'>Nexora Digital Agency</p>

                <h1 className='text-4xl font-bold leading-tight  text-gray-900 dark:text-white sm:text-5xl lg:text-6xl'>We build Digital experiences that move businesses forward
                </h1>

                <p className='mt-6 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg'>We design and build modern websites and digital experiences that help ambitious brands grow, connect and stand out.</p>

                <div className='mt-8 flex flex-wrap items-center gap-4'>
                    
                    <a href="#connect" className=' items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary/90 '>Start a Project →</a>
                    
                   <a href="#work" className='inline-flex items-center rounded-full border border-gray-300 px-6 text-sm bg-primary py-3 text-gray-700 font-semibold transition-all duration-200 hover:border-primary 
                   hover:bg-primary/5
                   hover:text-primary dark:border-gray-700 dark:text-gray-300 
                   dark:hover:bg-primary/10
                   dark:hover:text-primary
                   dark:hover:border-primary'> View Our Work</a>
                </div>
            </div>
            {/* Right side - Hero test */}

                <div>
                    <img src={assets.heroImg}
                     alt="Nexora Digital Agency team working together" className='w-full rounded-3xl object-cover shadow-[0_20px_40px_rgba(0,0,0,0.12) dark:shadow-[0_20px_40px_rgba(0,0,0,0.35) transition-transform duration-500 hover:translate-y-1 ' />
                </div>

        </div>

    </section>
  )
}

export default Hero