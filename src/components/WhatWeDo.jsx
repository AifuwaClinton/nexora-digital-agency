import React from 'react'
import assets from '../assets/assets'

const WhatWeDo = () => {
    return (

        <section id='services' className='mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24'>

            {/* Heading */}
            <div className='text-center'>
                <p className='text-sm font-semibold uppercase tracking-widest text-primary'>
                    What We Do
                </p>

                <h2 className='mt-3 text-3xl font-bold tracking-tight text-gray-900
                  dark:text-white sm:text-4xl '>Everything you need to build and grow online
                </h2>

                <p className='mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg'>
                    From websites and branding to digital marketing, we create digital experiences that businesses stand out and connect with their audience.
                </p>
            </div>

            {/* Services */}

            <div className='mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 '>

                {/* Services 1 */}
                <div className='group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:shadow-none'>

                    {/* Image */}
                    <div className='relative overflow-hidden'>
                        <img src={assets.webDesign}
                            alt="Web design and development"
                            className='h-64 w-full object-cover transition duration-500 group-hover:scale-105' />

                        <div className='absolute inset-0 bg-black/10'></div>
                    </div>

                    {/* content */}
                    <div className='p-6'>

                        <p className='text-sm font-semibold text-primary '>
                            01 ─────────
                        </p>
                        <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>
                            Web Design & Development
                        </h3>

                        <p className='mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400'>
                            We design and develop modern, responsive websites that help
                            businesses build a strong online presence and connect with
                            their audience.
                        </p>
                    </div>


                </div>
                {/* Services 2 */}
                <div className='group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:shadow-none'>

                    {/* image */}
                    <div className='relative overflow-hidden'>
                        <img src={assets.branding}
                            alt="Branding and design"
                            className='h-64 w-full object-cover transition duration-500 group-hover:scale-105' />

                        <div className='absolute inset-0 bg-black/10'></div>
                    </div>

                    {/* content */}
                    <div className='p-6'>

                        <p className='text-sm font-semibold text-primary '>
                            02 ─────────
                        </p>

                        <h3 className='mt-3 text-xl font-semibold text-gray-900 dark:text-white'>
                            Branding & Design
                        </h3>

                        <p className='mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400'>We create memorable brand identities and thoughtful visual designs that help businesses communicate clearly and stand out from the competition.</p>
                    </div>
                </div>

                {/* Service 3  */}
                <div className=' group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1  hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:shadow-none '>

                    <div className='relative overflow-hidden'>
                        <img src={assets.digital}
                            alt="Digital marketing"
                            className='h-64 w-full object-cover transition duration-500 group-hover:scale-105' />
                        <div className='absolute inset-0 bg-black/10'></div>
                    </div>

                    <div className='p-6'>

                        <p className='text-sm font-semibold text-primary'>
                            03 ─────────
                        </p>

                        <h3 className='mt-2 text-xl font-semibold text-gray-900 dark:text-white'>
                            Digital Marketing
                        </h3>

                        <p className='mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400'>
                            We help businesses reach the right audience through strategic digital marketing that increases visibility, engagement, and growth.
                        </p>
                    </div>
                </div>

            </div>



        </section>
    )
}

export default WhatWeDo