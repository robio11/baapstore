import { Link } from 'react-router-dom'
import baapstorevideo from '../assets/baapstorevideo.mp4'
import {ArrowRight } from 'lucide-react'
import Dropbenefits from './Dropbenefits';
// import Marquee from "react-fast-marquee";

const HereSection = () => {
  return (
    <div className="items-center justify-center flex flex-col" >
      {/* <Marquee speed={200}>
        <div>hello</div>
      </Marquee> */}
      <div className="max-w-full flex flex-col md:flex-row mx-auto bg-gray-950 p-8 items-center gap-16">
        <div className="flex flex-col gap-10 md:w-[50%]">
          <div>
            <video src={baapstorevideo} controls loop autoPlay />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between md:w-[40%] gap-3">
          <div className="flex flex-col items-center justify-center gap-8 p-3">
            <h1 className="flex text-4xl text-yellow-300 font-semibold text-center">
              Start Your E-Commerce Dropshipping Business!
            </h1>
            <p className="flex text-2xl font-semibold text-white text-center">
              Resell thousands of products on your business name, for high
              profits, without buying any inventory upfront. You can sell on
              your own website, Amazon or simply via Whatsapp.
            </p>
          </div>
          <div className="flex  text-white text-2xl items-center justify-center bg-red-500 hover:bg-green-600 w-[12rem] p-1">
            <Link to="/" className="flex text-center p-2">
              <span>Contact us</span>
              <ArrowRight className="flex text-center mt-2 ml-2"/>
            </Link>
          </div>
        </div>
      </div>
      <Dropbenefits/>
    </div>
  )
}

export default HereSection
