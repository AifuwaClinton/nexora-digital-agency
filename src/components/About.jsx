import React from 'react'

const About = () => {
    return (
        <section id='about' className='mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24'>
            <div className='text-center'>

                <p className='text-sm font-semibold uppercase tracking-widest text-primary'>
                    About Nexora
                </p>

                <h2 className=' mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
                    We turn ideas into digital experiences
                </h2>

                <p className='mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg'>
                    Nexora is a digital agency focused on creating thoughtful websites,
                    memorable brands, and digital experiences that help businesses grow.
                </p>

            </div>

            <div className='mt-12 grid gap-10 md:grid-cols-2 md:items-center'>

                {/* Left side */}
                <div>
                    <h3 className='text-2xl font-semibold text-gray-900 dark:text-white'>
                        Built around ideas, design, and technology
                    </h3>

                    <p className='mt-4 text-base leading-7 text-gray-600 dark:text-gray-400'>
                        We combine strategy, creativity, and technology to create digital
                        solutions that are not only visually appealing, but also purposeful
                        and easy to use.
                    </p>

                    <p className='mt-4 text-base leading-7 text-gray-600 dark:text-gray-400'>
                        From the first idea to the final product, we focus on creating
                        experiences that help businesses communicate better and grow online.
                    </p>
                </div>

                {/* Right side */}

                <div className='rounded-3xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-900'>
                    <p className='text-sm font-semiboldsemib tracking-widest text-primary '>
                        Our approach
                    </p>

                    <h3 className='mt-3 text-2xl  font-semibold text-gray-900 dark:text-white'> Strategy first. Design with purpose

                    </h3>

                    <p className='mt-4 text-base leading-7 text-gray-600 dark:text-gray-400'>
                        Every project starts with understanding the goal. We then turn that
                        understanding into a clear, engaging, and effective digital experience.
                    </p >
                </div>

            </div>

            <div className='mt-12 grid gap-10 md:grid-cols-3'>
                {/* value 1 */}
                <div className='rounded-3xl border border-gray-200 p-6 dark:border-gray-800'>
                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                        Creative
                    </h3>

                    <p className='mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400'>
                        We think beyond the ordinary to create digital experiences that stand out.
                    </p>
                </div>

                {/* Value 2 */}

                <div className='rounded-2xl border border-gray-200 p-6 dark:border-gray-800'>
                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                        Purposeful
                    </h3>

                    <p className='mt-2 text-sm  leading-6 text-gray-600 dark:text-gray-400'>
                        Every design decision has a reason and every solution starts with a goal.
                    </p>
                </div>

                {/* Value 3 */}
                <div className='rounded-2xl border border-gray-200 p-6 dark:border-gray-800'>
                    <h3 className='text-lg font-semibold  text-gray-900 dark:text-white'>
                        Collaborative
                    </h3>

                    <p className='mt-2 text-sm  text-gray-600 leading-6 dark:text-gray-400'>
                      We work closely with our clients to turn ideas into meaningful results.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default About