import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Footer from './components/Footer'

export default function Home() {
  const name = "Zer01";
  return (
    <div className='text-red-500'>
        <Nav className="logo" />
        <Hero name1 = {name} />
        <Footer />    
    </div>
  )
}
