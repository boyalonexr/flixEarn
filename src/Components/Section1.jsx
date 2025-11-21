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


  const [activeCard, setActiveCard] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const scrollRef = useRef(null);

  const prevSlide = () => {
    scrollRef.current.scrollBy({ left: -600, behavior: "smooth" });
  }

  const nextSlide = () => {
    scrollRef.current.scrollBy({ left: 600, behavior: "smooth"});
  }

  return (
    <div className="text-white bg-[#141414] p-4 md:px-8 max-w-lg md:max-w-3xl lg:max-w-4xl x12:max-w-[78%] mx-auto x12:ml-auto x12:mr-0 mt-12">
      {/* Section Title + Arrows */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-reddit2 font-medium">
          Early Access
        </h2>
        <div className="flex items-center gap-3">
          <button 
            onClick={prevSlide}
            className="p-2 bg-[#1E1F21] rounded-full hover:bg-[#2A2B2D] transition duration-500">
              <IoIosArrowBack />
          </button>
          <button 
            onClick={nextSlide}
            className="p-2 bg-[#1E1F21] rounded-full hover:bg-[#2A2B2D] transition duration-500">
           <IoIosArrowForward />
          </button>
        </div>
      </div>

      {/* Movies Grid */}
      <div 
        ref={scrollRef}
        className="overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-smooth"
      >
        <div className="flex gap-4 py-4">
          {moviesData.map((movie) => (
            <div key={movie.id} className="snap-start">
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
    </div>
  );
}

export default Section1;
