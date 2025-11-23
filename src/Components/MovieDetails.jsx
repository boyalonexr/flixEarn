import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa6";
import { moviesData } from './MoviesData';

export default function MovieDetails() {
  const { key } = useParams();
  const [showIcon, setShowIcon ] = useState(false)
  const movieImg = "https://res.cloudinary.com/dmg0ohw7r/image/upload/f_auto,q_auto/v1763897129/images_u1hbfq.jpg"
  const videoSrc = "https://res.cloudinary.com/dmg0ohw7r/video/upload/f_auto,q_auto/v1763894166/Family_Guy_-_S01E06_-_Unknown_5afff1b770a4bbfb1b767f8ce8ac201d_qarixn.mp4";

  // convert id string → number
  const movie = moviesData.find(m => m.key === key );

  if (!movie) return <h1>Movie not found</h1>;

  return (
    <div 
      className="relative p-6 mt-20 max-w-full sm:min-w-full px-4 md:px-8 bg-cover bg-center "
      style={{ backgroundImage: `url(${movie.imgSrc})`}}
      >
      {/* Dark overlays */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Content */}
        <div className="relative flex flex-col justify-center gap-3 w-full max-w-lg md:max-w-3xl lg:max-w-4xl x12:max-w-7xl mx-auto">

          <div className="flex text-white items-center gap-3">
            <h1 className="text-4xl font-medium">{movie.title}</h1>
            <span
              className="w-8 h-8 flex justify-center items-center font-medium rounded-full text-black"
              style={{ backgroundColor : `${movie.ratingColor}`}}
            >
              {movie.rating}
            </span>
          </div>

          <p className="mt-2 max-w-[90%] md:max-w-[420px] font-semibold text-[14px] text-white leading-relaxed">
            {movie.desc}
          </p>

          <ul className=" max-w-[90%] md:max-w-[420px]  text-white font-reddit2 ">
            <li>Director:
              <span className="text-[#b9cbe3] pl-2">Vince Gilligan</span>
            </li>
            <li>Cast: 
              <span className="text-[#b9cbe3] pl-2">Brian Cranston, Jesse Plemons, Matt Jones, Jonathan Banks, Charles Baker</span>
            </li>
            <li className="hover:text-red-500 transition-colors">
              Genre:
              <span className="text-[#b9cbe3] pl-2">{movie.genre}</span>
            </li>
            <li>Premiere: <span className="text-[#b9cbe3] pl-2">2019</span></li>
            <li>Running Time: <span className="text-[#b9cbe3] pl-2">128 mins</span></li>
            <li>Country: <span className="text-[#b9cbe3] pl-2">USA</span></li>
          </ul> 

          {/* FXC */}
          <div
            onMouseEnter={() => setShowIcon(true)}
            onMouseLeave={() => setShowIcon(false)}
            className='relative flex justify-between items-center p-1.5 w-[220px] cursor-default rounded-full bg-[#1e1f21]'
          >
            <div className='flex items-center gap-2'>
              <img className='w-5 h-5' src={movie.cryptoIcon} alt={movie.mine} />
              <p className='text-gray-400'>
                <span className='text-green-500'>{movie.rate}</span>/min
              </p>
            </div>

            <span className={`p-0.5 transition-all duration-500 rounded-full mr-2 ${showIcon ? "bg-[#b9cbe3]" : "bg-[#b9cbe3]/40"}`}></span>

            {showIcon && (
              <div className='absolute border border-[#b9cbe3] bottom-10 left-7 p-1 rounded-md bg-[#b9cbe3] after:content-[""] after:absolute after:top-full after:left-1/2 after:translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#b9cbe3]'>
                <p className='text-xs font-semibold text-black'>You earn {movie.mine} per min</p>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 mt-4">
            <button className="w-[11rem] py-3 rounded-full bg-[#b9cbe3] hover:bg-red-500 hover:text-white transition-colors duration-500 text-black text-[14px] uppercase font-medium">
              add review
            </button>

            <button className="w-[3.5rem] h-[3.5rem] flex items-center justify-center rounded-full bg-black text-[#8d8b8b] hover:text-yellow-500 transition">
              <FaRegBookmark size={22} />
            </button>
          </div>

            <video
              src={videoSrc}
              poster={movieImg}
              controls
              className="w-full h-60 md:h-96 rounded-xl object-cover my-4 mb-10"
            />
        </div>
    </div>
  );
}
