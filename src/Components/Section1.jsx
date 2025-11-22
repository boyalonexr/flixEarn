import { useState, useRef } from 'react'
import { IoIosArrowBack , IoIosArrowForward } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";
import { BiCoinStack } from "react-icons/bi";
import { HiOutlineTrophy } from "react-icons/hi2";
import { TbChartBubble } from "react-icons/tb";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import VideoCard from "./VideoCard";
import { moviesData } from './MoviesData';

function Section1() {
  const sectionData = [
    { key: "affiliate", 
      name: "Affiliate", 
      color: "text-green-500",
      backgroundColor: "#1aaa671f",
      desc: (
        <>
          The affiliate program increases your income by 
          <span className='text-green-500'> farming coins </span>
          for the time you watch movies.
        </>
      ),
      icon: <TbChartBubble size={20} className='text-green-500' /> 
    },
    { key: "token",
      name: "Token", 
      color: "text-red-500",
      backgroundColor: "#ce2b2b1f",
      desc: (
        <>
          Buy a unique coin FXC and get a bonus of up to <span className='text-red-500'>25%</span> to your farming speed.
        </>
      ),
      icon: <RiMoneyDollarCircleLine size={20} className='text-red-500' /> 
    },
    { key: "invest", 
      name: "Invest", 
      color: "text-blue-500",
      backgroundColor: "#1662ff1f",
      desc: (
        <>
          Invest and unlock the potential of partnership to <span className='text-blue-500'>maximize</span> your movie-viewing profits.
        </>
      ),
      icon: <BiCoinStack size={20} className='text-blue-500' /> 
    },
    { key: "weekly race", 
      name: "Weekly Race", 
      color: "text-purple-500",
      backgroundColor: "#ac29c21f",
      desc: (
        <>
          Take your chance at the weekly tournament. Participate in the <span className='text-purple-500'>$10.000</span> drawing and get extra.
        </>
      ),
      icon: <HiOutlineTrophy size={20} className='text-purple-500' /> 
    },
  ];

  const colorMap = {
  affiliate: 'group-hover:text-green-500',
  token: 'group-hover:text-red-500',
  invest: 'group-hover:text-blue-500',
  'weekly race': 'group-hover:text-purple-500',
};

  const scrollRefEarly = useRef(null);
  const scrollRefActual = useRef(null);
  const scrollRefFarm = useRef(null);
  const [activeCard, setActiveCard] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  
  const prevEarly = () => scrollRefEarly.current.scrollBy({ left: -600, behavior: "smooth" });
  const nextEarly = () => scrollRefEarly.current.scrollBy({ left: 600, behavior: "smooth" });

  const prevActual = () => scrollRefActual.current.scrollBy({ left: -600, behavior: "smooth" });
  const nextActual = () => scrollRefActual.current.scrollBy({ left: 600, behavior: "smooth" });

  const prevFarm = () => scrollRefFarm.current.scrollBy({ left: -600, behavior: "smooth" });
  const nextFarm = () => scrollRefFarm.current.scrollBy({ left: 600, behavior: "smooth" });

  
    // --- get random subset helper ---
  function getRandomMovies(count) {
    const shuffled = [...moviesData].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }

  // --- create 3 completely independent random lists ---
  const [earlyMovies] = useState(() => getRandomMovies(moviesData.length));
  const [actualMovies] = useState(() => getRandomMovies(moviesData.length));
  const [farmingMovies] = useState(() => getRandomMovies(moviesData.length));


  return (
    <div 
    className=" bg-[#141414] text-white
      max-w-full sm:min-w-full px-4 md:px-8">
      {/* Section: Early Access */}
      <div className='w-full max-w-lg md:max-w-3xl lg:max-w-4xl x12:max-w-7xl mx-auto'>
        <div className=" relative flex items-center justify-between">
          <h2 className="text-3xl font-reddit2 font-medium">
            Early Access
          </h2>
          <div className="flex items-center gap-3">
            <button
              className="hidden md:block py-2 px-4 bg-[#1E1F21] rounded-full hover:bg-[#2A2B2D] hover:text-red-500 duration-500"
            >
              <p className='text-xs font-semibold font-reddit2'>VIEW ALL</p>
            </button>
            <button 
              onClick={prevEarly}
              className="p-2 bg-[#1E1F21] rounded-full hover:bg-[#2A2B2D] hover:text-red-500  transition duration-500">
                <IoIosArrowBack />
            </button>
            <button 
              onClick={nextEarly}
              className="p-2 bg-[#1E1F21] rounded-full hover:bg-[#2A2B2D] hover:text-red-500  transition duration-500">
            <IoIosArrowForward />
            </button>
          </div>
        </div>

        {/* Early Access Movies Grid */}
        <div 
          ref={scrollRefEarly}
          className="overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-smooth"
        >
          <div className="flex w-[48%] md:w-[23%] lg:w-[18.6%] gap-4 py-4">
            {earlyMovies.map((movie) => (
              <div key={movie.id} className="snap-start w-full flex-shrink-0">
                <VideoCard
                  {...movie}
                  isActive={activeCard === movie.id}
                  onClick={() => setActiveCard(movie.id)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Section Cards */}
        <div className="grid grid-cols-1 mt-12 md:grid-cols-2 gap-6">
          {sectionData.map((section, i) => (
            <div
              key={i}
              onClick={() => setActiveSection(section.key)}
              className={`
                relative p-4 lg:p-6 group cursor-pointer border-4 rounded-2xl w-full max-w-lg mx-auto overflow-visible
                transition-transform duration-300 ease-out
                ${activeSection === section.key ? 'scale-105 shadow-2xl' : 'hover:scale-[1.02] hover:shadow-lg'}
              `}
              style={{ borderColor: section.backgroundColor }}
            >
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: section.backgroundColor }}
                  >
                    {section.icon}
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-medium">{section.name}</h2>

                  {/* Arrow Animation */}
                <FiArrowUpRight
                    size={24}
                    className={`ml-auto text-[#898e95]
                      transition-transform duration-500 ease-in-out
                      group-hover:-translate-y-3 group-hover:translate-x-2
                      ${colorMap[section.key]}
                    `}
                  />
                </div>

                <p className="text-[16px] pt-4 text-[#898e95] sm:py-2">
                  {section.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section: Actual */}
        <div className="flex mt-12 items-center justify-between">
          <h2 className="text-3xl font-reddit2 font-medium">
            Actual
          </h2>
          <div className="flex items-center gap-3">
            <button
              className="hidden md:block py-2 px-4 bg-[#1E1F21] rounded-full hover:bg-[#2A2B2D] hover:text-red-500 duration-500"
            >
              <p className='text-xs font-semibold font-reddit2'>VIEW ALL</p>
            </button>
            <button 
              onClick={prevActual}
              className="p-2 bg-[#1E1F21] rounded-full hover:bg-[#2A2B2D] hover:text-red-500  transition duration-500">
                <IoIosArrowBack />
            </button>
            <button 
              onClick={nextActual}
              className="p-2 bg-[#1E1F21] rounded-full hover:bg-[#2A2B2D] hover:text-red-500  transition duration-500">
            <IoIosArrowForward />
            </button>
          </div>
        </div>

        {/* Actual Movies Grid */}
         <div 
          ref={scrollRefActual}
          className="overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-smooth"
        >
          <div className="flex w-[48%] md:w-[23%] lg:w-[18.6%] gap-4 py-4">
            {actualMovies.map((movie) => (
              <div key={movie.id} className="snap-start w-full flex-shrink-0">
                <VideoCard
                  {...movie}
                  isActive={activeCard === movie.id}
                  onClick={() => setActiveCard(movie.id)}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Section: Profitable Farming */}

        <div className="flex mt-12 items-center justify-between">
          <h2 className="text-3xl font-reddit2 font-medium">
            Profitable Farming
          </h2>
          <div className="flex items-center gap-3">
            <button
              className="hidden md:block py-2 px-4 bg-[#1E1F21] rounded-full hover:bg-[#2A2B2D] hover:text-red-500 duration-500"
            >
              <p className='text-xs font-semibold font-reddit2'>VIEW ALL</p>
            </button>
            <button 
              onClick={prevFarm}
              className="p-2 bg-[#1E1F21] rounded-full hover:bg-[#2A2B2D] hover:text-red-500  transition duration-500">
                <IoIosArrowBack />
            </button>
            <button 
              onClick={nextFarm}
              className="p-2 bg-[#1E1F21] rounded-full hover:bg-[#2A2B2D] hover:text-red-500  transition duration-500">
            <IoIosArrowForward />
            </button>
          </div>
        </div>

        {/* Profitable Farming Movies Grid */}
        <div 
          ref={scrollRefFarm}
          className="overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-smooth"
        >
          <div className="flex w-[48%] md:w-[23%] lg:w-[18.6%] gap-4 py-4">
            {farmingMovies.map((movie) => (
              <div key={movie.id} className="w-full flex-shrink-0 snap-start">
                <VideoCard
                  {...movie}
                  isActive={activeCard === movie.id}
                  onClick={() => setActiveCard(movie.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Section1;
