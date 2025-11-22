import { motion } from "framer-motion";
import { IoPlayOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

 const VideoCard = ({
  imgSrc,
  title,
  rating,
  genre,
  cryptoIcon,
  rate,
  isNew,
  isActive,
  onClick,
}) => {
  return (
    <div
      className="flex w-full  flex-col cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-60 w-full rounded-xl overflow-hidden">

        {/* Poster */}
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />

        {/* OVERLAY  */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          whileHover={{ opacity: 1 }}    
          transition={{ duration: 0.4, ease: "easeIn" }}
          className="absolute inset-0 flex items-center justify-center"
        >
           {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 rounded-lg" />


          {/* Play button */}
           <div className='relative group z-10'>
            <div className="flex justify-center group-hover:transition-all duration-500 items-center w-16 h-16 rounded-full bg-white/30 group-hover:bg-red-600/20 backdrop-blur-sm">
              <div className="bg-black w-12 h-12 rounded-full flex justify-center items-center">
                <IoPlayOutline className="text-white/50 group-hover:transition-all duration-500 group-hover:text-red-500 text-3xl" />
              </div>
            </div>
           </div>
        </motion.div>

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

export default VideoCard
