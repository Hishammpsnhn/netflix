import React from 'react'
import phoneImage from '../../assets/mobile-0819.jpg'
import boxshotImage from '../../assets/boxshot.png'

import downloadIcon from '../../assets/download-icon.gif'

const MobileSection = () => {
  return (
    <section className="bg-black text-white py-10 px-5 md:py-24 md:px-20 lg:px-44 mt-10">
    <div className="flex flex-col lg:flex-row items-center lg:items-start relative">
      <div className="relative w-full lg:w-1/2">
        <img src={phoneImage} alt="phone" className="w-full" />
        <div className="absolute top-3/4 left-1/4 md:left-1/3 lg:left-1/4 bg-black border border-gray-500 rounded-lg flex items-center p-2 w-72 h-24">
          <img src={boxshotImage} alt="Stranger Things box shot" className="w-12 h-auto mr-4" />
          <div className="flex-1">
            <div className="font-medium text-sm whitespace-nowrap">Stranger Things</div>
            <div className="text-blue-500 text-xs">Downloading...</div>
          </div>
          <div
            className="w-12 h-12 bg-cover bg-center"
            style={{ backgroundImage: `url(${downloadIcon})` }}
          ></div>
        </div>
      </div>
      <div className="mt-10 lg:mt-0 lg:ml-10 w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Download your shows to watch offline
        </h2>
        <p className="text-lg md:text-xl mt-4">
          Save your favourites easily and always have something to watch.
        </p>
      </div>
    </div>
  </section>
  )
}

export default MobileSection