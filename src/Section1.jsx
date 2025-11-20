import { useState } from 'react'
import { motion } from "framer-motion";
import { IoIosArrowBack , IoIosArrowForward } from "react-icons/io";
import { IoPlayOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import { moviesData } from './Components/MoviesData';

const VideoCard = ({ imgSrc, title, rating, genre, cryptoIcon, rate, isNew, onClick, isActive }) => {
  return (
    <div className="flex flex-shrink-0 w-50 sm:w-40 flex-col cursor-pointer" onClick={onClick}>
      {/* Poster container */}
      <div className="relative h-60 w-full rounded-xl overflow-hidden group">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Overlay when active */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center o"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 rounded-lg" />
            <div className="relative z-10 flex justify-center items-center w-16 h-16 rounded-full bg-white/50 backdrop-blur-sm">
              <div className="bg-black w-12 h-12 rounded-full flex justify-center items-center">
                <IoPlayOutline className="text-white text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]" />
              </div>
            </div>
          </motion.div>
        )}

        {/* Rating & Bookmark */}
        <div className="absolute top-2 left-0 w-full text-white px-2">
          <div className="flex justify-between items-center">
            <span className="bg-yellow-500 text-black text-sm w-9 h-9 rounded-full flex justify-center items-center">
              {rating}
            </span>
            <span className="bg-black w-9 h-9 rounded-full flex justify-center items-center">
              <CiBookmark className="text-base" />
            </span>
          </div>
        </div>

        {/* New & Hot */}
        <div className="absolute bottom-2 left-2 w-full text-white px-2">
          <div className="flex gap-2">
            {isNew && (
              <span className="bg-red-600 text-sm w-9 h-9 rounded-full font-semibold flex justify-center items-center">
                New
              </span>
            )}
            <span className="bg-white w-9 h-9 rounded-full flex justify-center items-center">
              <AiOutlineFire className="text-md text-red-600" />
            </span>
          </div>
        </div>
      </div>

      {/* Title & Genre */}
      <div className="my-2 px-1">
        <p className="text-base font-light text-white truncate">{title}</p>
        <p className="text-xs text-gray-400">{genre}</p>
      </div>

      {/* Crypto Earnings */}
      <div className="flex items-center gap-2 bg-[#1e1f21] p-2 px-3 rounded-full">
        <img className="w-6 h-6" src={cryptoIcon} alt="" />
        <p className="text-xs text-[#8d8d8e]">
          <span className="text-green-500">{rate}</span>/ min
        </p>
      </div>
    </div>
  );
};


function Section1() {
    const [activeCard, setActiveCard] = useState(null);
    const [ currentIndex, setCurrentIndex ] = useState(0)
 
    const prevSlide = () => {
      setCurrentIndex((prev) => prev === 0 ? moviesData.length - 1: prev - 1)
    }

    const nextSlide = () => {
      setCurrentIndex((prev) => prev === moviesData.length - 1 ? 0 : prev + 1 )
    }

  return (
    <div className="text-white bg-[#141414] p-4 sm:px-12 md:px-8">
      <div className="flex items-center justify-between">

        {/* Title */}
        <h2 className="text-3xl font-reddit2 font-medium">
          Early Access
        </h2>

        {/* Arrow Buttons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={prevSlide}
            className="p-2 bg-[#1E1F21] rounded-full hover:bg-[#2A2B2D] transition duration-500">
              <IoIosArrowBack />
          </button>

          <button 
            onClick={nextSlide}
            className="p-2 bg-[#1E1F21]  rounded-full hover:bg-[#2A2B2D] transition duration-500">
           <IoIosArrowForward />
          </button>
        </div>
      </div>

      {/* Movies Grid */}
      <div className='overflow-hidden'>
        <div 
          className="flex transition-transform duration-500 gap-4 py-4"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
          {moviesData.map((movie) => (
            <VideoCard
              key={movie.id}
              {...movie}
              isActive={activeCard === movie.id}
              onClick={() => setActiveCard(movie.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section1
