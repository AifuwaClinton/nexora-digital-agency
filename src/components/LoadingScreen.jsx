import React, { useEffect, useState } from 'react'
import assets from '../assets/assets'

const LoadingScreen = ({setIsLoading, theme}) => {

    const [showBrand, setShowBrand] = useState(false)

    useEffect(() => {
        const timer = setTimeout (() => {
            setShowBrand(true)
        }, 1500 )

        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {

            setIsLoading(false) 
        }, 3500)

        return () => clearTimeout(timer)
    }, [setIsLoading])
    return (
        <div className= {`fixed inset-0 z-[9999] flex items-center justify-center transition-colors duration-300 ${theme === "dark" ? "bg-gray-950" : "bg-white"}`}>

            <div className='flex flex-col items-center gap-6'>

                <img src={assets.spinner} 
                alt="Loading" 
                className={`w-10 h-10 animate-spin transition-opacity duration-500 ${showBrand ? 'opacity-0 ' : 'opacity-100'}`}/>

                 <h1 className={`text-2xl font-bold tracking-[0.3em] transition-opacity duration-500 text-gray-900 dark:text-white ${showBrand ? 'opacity-100' : 'opacity-0'}`}>
                    NEXORA
                 </h1>
            
            </div>
        </div>
    )
}

export default LoadingScreen