import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-center pl-4 pr-4 pt-2 pb-2 bg-white dark:bg-black'>
        <div className='w-full max-w-screen-xl text-center'>
            &copy; {new Date().getFullYear()} Gorath71. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer