import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
    return (

        <footer className='border-t-2 border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950'>

            <div className='mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16'>

                <div className='grid gap-10 md:grid-cols-2 '>

                    {/* Brand */}
                    <div>
                        <img src={assets.logo}
                            alt="Nexora"
                            className='h-6 w-auto' />

                        <p className='mt-5 max-w-sm text-sm leading-6 text-gray-600 dark:text-gray-400'>
                            We create digital experiences that help businesses build stronger brands,
                            connect with their audience, and grow online.
                        </p>
                    </div>

                    {/* Links */}
                    <div className='grid grid-cols-2  gap-8'>

                        {/* Company */}
                        <div >

                            <h3 className='text-sm font-semibold text-gray-900 dark:text-white'>
                                Explore
                            </h3>

                            <ul className='mt-4 space-y-3'>
                                <li>
                                    <a href="#" className='text-sm text-gray-600 transition hover:text-primary dark:text-gray-400'>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" className='text-sm text-gray-600 transition hover:text-primary dark:text-gray-400'>
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#work" className='text-sm text-gray-600 transition hover:text-primary dark:text-gray-400'>
                                        Work
                                    </a>
                                </li>
                                <li>
                                    <a href="#services" className='text-sm text-gray-600 transition hover:text-primary dark:text-gray-400'>
                                        Service
                                    </a>
                                </li>
                                <li>
                                    <a href="#team" className='text-sm text-gray-600 transition hover:text-primary dark:text-gray-400'>
                                        Team
                                    </a>
                                </li>
                            </ul>

                        </div>

                        <div>
                            <h3 className='text-sm font-semibold text-gray-900 dark:text-white'>
                                Services
                            </h3>

                            <ul className='mt-4 space-y-3'>

                                <li>

                                    <a href="#services" className='text-sm text-gray-600 transition hover:text-primary dark:text-gray-400'>Website Design & Development</a>
                                </li>
                            </ul>
                            <ul className='mt-4 space-y-3'>

                                <li>

                                    <a href="#services" className='text-sm text-gray-600 transition hover:text-primary dark:text-gray-400'>Branding & Design</a>
                                </li>
                            </ul>
                            <ul className='mt-4 space-y-3'>

                                <li>

                                    <a href="#services" className='text-sm text-gray-600 transition hover:text-primary dark:text-gray-400'>Digital Marketing</a>
                                </li>
                            </ul>
                        </div>

                        <div>

                        </div>
                    </div>
                </div>
            </div>
            
                {/* Connect */}
            <div id='connect' className='px-6 mt-12 border-t-2 border-gray-200 pt-8 dark:border-gray-800'>

                <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                     Let's Connect
                </h3>


                <p className='mt-3 text-sm text-gray-600 dark:text-gray-400'>
                    Have a project in mind? We'd love to hear about it.
                </p>

                <div className='mt-5 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:gap-6'>

                    <a href="mailto:clintonaifuwa7@gmail.com" className='text-gray-600 transition hover:text-primary dark:text-gray-400'>
                        clintonaifuwa7@gmail.com
                    </a>

                    <a href="tel:+2349114703608" className='text-gray-600 transition hover:text-primary dark:text-gray-400'>
                        +2349114703608
                    </a>
                </div>

            </div>

            <div className='mt-12 border-t-2 border-gray-200 pt-6 text-center dark:border-gray-950'>

                <p className='text-sm text-gray-500 pt-6 text-center dark:border-gray-800'>
                     © 2026 Nexora. All rights reserved.
                </p>
            </div>


        </footer>

    )
}

export default Footer