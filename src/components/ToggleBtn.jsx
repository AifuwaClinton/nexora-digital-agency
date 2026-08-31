import React from 'react'
import assets from '../assets/assets'

const ToggleBtn = ({theme,setTheme}) => {
  return (
    <button onClick={() => setTheme (theme === "light" ? "dark" : "light") }>
        <img src={theme === "light" ? assets.moon : assets.sun}
        alt={theme === "light" ? "Dark Mode" : "Light Mode"} className='w-10 h-10 rounded-full bg-gray-100 p-2 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800'/>
    </button>
  )
}

export default ToggleBtn