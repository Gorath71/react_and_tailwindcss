import React from 'react'

const NotFound = () => {
  return (
    <main className='flex justify-center p-4'>
      <div className='w-full max-w-screen-xl flex flex-col gap-2 pt-32 text-center'>
        <h3>404 – Page not found</h3>
        <span className='text-accent'>The page you are looking for doesn’t exist or has been moved.</span>
      </div>
    </main>
  )
}

export default NotFound