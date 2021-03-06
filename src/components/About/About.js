import React from 'react'
import image from '../../images/about.png'

const About = () => {
  return (
    <section>
      <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col  items-center">
        <div className="md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About us
          </h1>
          <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
          <div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Buy Now</button>
            <button className="ml-4 text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Lern More</button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img className="m-auto" alt="hero" src={image} />
        </div>
      </div>
    </section>
  )
}

export default About
