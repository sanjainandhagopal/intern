import React from 'react'

export default function Nav() {
  return (
    <div className='w-full h-14 bg-indigo-500 flex flex-row justify-around'>
        <h1>logo</h1>
        <div className='w-2/3 flex flex-row justify-between'>
            <p>Home</p>
            <p>Explore</p>
            <p>Profile</p>
        </div>
    </div>
  )
}
