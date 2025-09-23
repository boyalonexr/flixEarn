import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { IoPlayOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import { moviesData } from './MoviesData';

const VideoCard = ({ imgSrc, title, rating, genre, cryptoIcon, rate, isNew, onClick, isActive }) => {
  return (
    <div className="max-w-full sm:w-40 flex flex-col cursor-pointer" onClick={onClick}>
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

function MovieSearch({ toggleActive }) {
  const inputRef = useRef(null);
  const [active, setActive] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState('All Content');

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      {/* Overlay (only visible on desktop) */}
      <div
        onClick={() => toggleActive(false)}
        className="fixed hidden md:block inset-0 bg-black/80 z-10"
      />

      {/* Main Modal */}
      <motion.div
        key="wallet"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          fixed top-20 z-9 md:mt-10 inset-0 -translate-x-1/2 border-t border-[#242323]
          bg-[#141414] text-white p-4 font-reddit md:rounded-xl shadow-lg
          max-w-[100%] sm:w-[85%] mx-auto md:w-[90%] lg:w-[55rem] overflow-hidden max-h-[80vh]
        "
      >
        <div>
          {/* Search + Genre Section */}
          <section className="flex w-[100%] md:flex-row gap-2 border-b border-[#242323] pb-4">
            <div
              onClick={() => setActive(prev => !prev)}
              className="relative flex items-center rounded-full px-3 justify-between w-[40%] md:w-[25%] bg-[#1e1f21]"
            >
              <h2 className="text-sm truncate">{selectedGenre}</h2>
              <RiArrowDropDownLine className={`${active ? 'text-red-500' : 'text-[#a0a2a5]'}`} />
            </div>

            <input
              ref={inputRef}
              className="p-3 px-4 w-[55%] md:w-[70%] bg-[#1e1f21] text-base focus:outline-none rounded-full"
              type="text"
              placeholder="Search"
            />

            <button
              onClick={() => toggleActive(false)}
              className="w-[5%] flex justify-center items-center self-center"
            >
              <MdOutlineCancel className="text-gray-500" />
            </button>

            {/* Dropdown */}
            {active && (
              <div className="absolute top-14 left-4 mt-3 bg-[#141414] min-w-[8rem] md:w-1/6 border border-zinc-700 rounded-3xl md:rounded-lg p-2 z-30">
                {['Movies', 'Tv Series', 'Anime'].map(genre => (
                  <p
                    key={genre}
                    onClick={() => {
                      setSelectedGenre(genre);
                      setActive(false);
                    }}
                    className="text-base p-2 hover:bg-[#1e1f21] rounded-md cursor-pointer"
                  >
                    {genre}
                  </p>
                ))}
              </div>
            )}
          </section>

          {/* Tags Section */}
          <section className="flex gap-3 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-red-900 scrollbar-track-transparent py-4">
            <span className="px-3 py-2 text-red-600 text-base font-semibold rounded-full shadow-sm bg-red-600/10">
              #Early Access
            </span>

            {['#Marvel', '#Netflix', '#2025', '#Action', '#Comedy', '#Horror'].map(tag => (
              <span
                key={tag}
                onClick={() => console.log(tag)}
                className="bg-[#1e1f21] px-4 py-2 rounded-full text-base text-[#93969c] cursor-pointer hover:bg-[#2c2d2f] hover:text-red-500 transition"
              >
                {tag}
              </span>
            ))}
          </section>

          {/* Movies Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 overflow-y-scroll scrollbar-thin scrollbar-thumb-red-900 scrollbar-track-transparent max-h-[65vh] py-4">
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
      </motion.div>
    </>
  );
}

export default MovieSearch;