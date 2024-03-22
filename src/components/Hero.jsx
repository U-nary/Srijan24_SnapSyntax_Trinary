import React from 'react'
import heroImage from '../assests/Hero.png'

export default function Hero() {
  return (
    <div className="flex justify-center mt-[2.5rem]">
      <img src={heroImage} alt="Hero"/>
    </div>
  )
}
