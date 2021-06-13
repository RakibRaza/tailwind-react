import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='root border-b-4 border-blue-500 flex justify-center items-center'>
      <div>
        <h1 className='md:text-8xl text-center font-light text-5xl text-white'>This is Stack</h1>
        <p className='text-center py-5 text-indigo-300 text-3xl'>A free open sourch css responsive framwork!</p>
        <div className='text-center pt-5'>
          <button className='bg-blue-500 border-2 border-blue-500 mr-2 hover:bg-blue-400 text-xl py-3 px-8 text-white rounded-md'>SIGN UP</button>
          <button className='border-2 ml-2 hover:bg-yellow-400 text-xl py-3 px-8 text-white rounded-md'>LERN MORE</button>
        </div>
      </div>

    </div>
  )
}

export default Header
