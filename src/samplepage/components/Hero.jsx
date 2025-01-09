import React from 'react'
import Sample from './Sample'

export default function Hero({name1}) {
  return (
    <div className='h-screen bg-green-300'>
        <h1>This is Hear {name1}</h1>
        <Sample name2={name1} />
    </div>
  )
}
