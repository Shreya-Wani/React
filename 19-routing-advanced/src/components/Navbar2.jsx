import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar2 = () => {
  const navigate = useNavigate()

  return (
    <div className='bg-gray-600 px-3 flex '>
      <button
        onClick={() => {
          navigate('/')
        }}
        className='bg-orange-500 m-2 p-2 cursor-pointer active:scale-95'>
        Return to Home Page
      </button>

      <button
        onClick={() => {
          navigate(-1)
        }}
        className='bg-orange-500 m-2 p-2 cursor-pointer active:scale-95'>
        Back
      </button>

      <button
        onClick={() => {
          navigate(+1)
        }}
        className='bg-orange-500 m-2 p-2 cursor-pointer active:scale-95'>
        Next
      </button>
    </div>
  )
}

export default Navbar2
