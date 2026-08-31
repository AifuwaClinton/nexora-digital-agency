import React from 'react'
import assets from '../assets/assets'

const FeaturedWork = () => {
  return (
    <section id='work' className='mx-auto max-w-7xl px-6 py-18 lg:px-8 lg:py-24'>
        <div className='text-center'>

            <p className='text-sm font-semibold uppercase tracking-widest text-primary'>Featured Work</p>

            <h2 className='mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
                Project we are proud of
            </h2>

            <p className='mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg'>A selection of digital experiences we've designed and built to help brands connect,grow,and stand out</p>
        </div>

        <div className='mt-12 flex justify-center'>

            {/* Project 1 */}
            <div className='w-full max-w-7xl  overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:shadow-none'>
          
                <div className='overflow-hidden'>
                <img src={assets.Crestora} alt="Crestora University website concept" className='h-64 w-full object-cover transition duration-500 hover:scale-105' />
                 </div>

                <div className='p-6'>

                    <p className='text-sm font-medium text-primary'>Education</p>

                    <h3 className='mt-2 text-xl font-semibold text-gray-900 dark:text-white'>Crestora University</h3>

                    <p className='mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400'>A modern University website designed to make courses, programs,  and campus information easy to explore</p>

                    <div className='mt-4 flex flex-wrap gap-2'>
                        <span className='rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300 '>react</span>

                        <span className='rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300'>
                         Tailwind CSS
                        </span>

                        <span className='rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300'>
                         Javascript
                        </span>

                        <div className='mt-4 flex flex-wrap gap-2'>

                        <a 
                        href="https://crestora-university.vercel.app"
                        target='_blank' 
                        rel='noopener noreferrer'
                        className='flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90'>
                          View Project
                        </a>
                        </div>
                    </div>

                </div>
            </div>


        </div>

    </section>
  )
}

export default FeaturedWork