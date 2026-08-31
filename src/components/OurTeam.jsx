import React from 'react'
import { teamData } from '../assets/assets'

const OurTeam = () => {
    return (
        <section id='team' className='mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24'>

            {/* Team Heading */}
            <div className='text-center'>

                <p className='text-sm font-semibold uppercase tracking-widest text-primary'>
                    Our Team
                </p>

                <h2 className='mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
                    The minds behind Nexora
                </h2>

                <p className='mx-auto mt-4 max-w-4xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg'> Meet the creative minds and skilled professionals who bring ideas to life and help businesses grow in the digital world.</p>

            </div>

            {/* Team Grid */}
            <div className='mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4 '>
                {teamData.map((member) => (

                    <div
                        key={member.name}
                        className='group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:shadow-none'>

                        {/* images */}
                        <div className='relative overflow-hidden'>
                            <img src={member.image}
                                alt={member.name}
                                className='h-80 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105' />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent'></div>
                        </div>

                        {/* information */}
                        <div className='p-5'>

                            <h3 className='text-lg  font-semibold tracking-tight text-gray-900 dark:text-white'>
                                {member.name}
                            </h3>

                            <p className='mt-1.5 text-sm font-medium text-primary'>
                                {member.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default OurTeam