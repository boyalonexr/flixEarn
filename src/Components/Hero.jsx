import { useState, useEffect } from "react"
import heroImg1 from '../assets/hero-imgs/bg-1.jpg'
import heroImg2 from '../assets/hero-imgs/bg-2.jpg'
import heroImg3 from '../assets/hero-imgs/bg-3.jpg'
import icon from '../assets/currencies/flixcoin.svg'
import { FaRegBookmark } from "react-icons/fa6";

function Hero() {
const heroSlides = [
  {
    title: "Savage Beauty",
    rating: 9.8,
    desc: "A brilliant scientist discovers a way to harness the power of the ocean's currents to create a new, renewable energy source. But when her groundbreaking technology falls into the wrong hands, she must race against time to stop it from being used for evil.",
    genres: ["Action", "Drama", "Comedy"],
    mine: "+0.005",
    color: "yellow-500",   
    img: heroImg1,
  },
  {
    title: "From the Side",
    rating: 7.1,
    desc: "In a world where magic is outlawed and hunted, a young witch must use her powers to fight back against the corrupt authorities who seek to destroy her kind.",
    genres: ["Adventure", "Thriller"],
    mine: "+0.002",
    color: "white",             
    img: heroImg2,
  },
  {
    title: "Lost Horizon",
    rating: 6.2,
    desc: "When a renowned archaeologist goes missing, his daughter sets out on a perilous journey to the heart of the Amazon rainforest to find him. Along the way, she discovers a hidden city and a dangerous conspiracy that threatens the very balance of power in the world.",
    genres: ["Adventure", "Fantasy"],
    mine: "+0.002",
    color: "yellow-500",       
    img: heroImg3,
  }
]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [ showIcon, setShowIcon ] = useState(false)

  useEffect(()=> {
    const interval = setInterval(()=> {
      setCurrentIndex( prevIndex => prevIndex === heroSlides.length - 1 ? 0 : prevIndex + 1);
    }, 3000)

    return () => clearInterval(interval)
  }, [heroSlides.length])

  return (
    <main className="relative mt-20 md:max-w-[78%] w-full overflow-hidden ml-auto"> 
      <div 
        className="flex h-[65vh] sm:h-[90vh] transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          { heroSlides.map((slide, i) => (
            <div 
              key={i}
              className='relative flex items-center w-full flex-shrink-0 bg-[#141414] text-white bg-cover bg-center px-4 sm:px-14 md:px-8'
              style={{ backgroundImage: `url(${slide.img})`}}
            >
              {/* Dark Overlay */}
              <div className='absolute inset-0 bg-black/60'/>

               {/* Bottom Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />

              {/* Content */}
              <div className='relative flex flex-col justify-center gap-3 h-full w-full max-w-lg' 
              >
                <div className='flex items-center gap-2'>
                  <h1 className='text-4xl font-medium'>{slide.title}</h1>
                <span className={`w-8 h-8 flex justify-center items-center font-medium rounded-full bg-${slide.color} text-black`}>
                    {slide.rating}
                  </span>
                </div>

                <p className='mt-2 max-w-[90%] text-sm leading-relaxed text-gray-300'>
                  {slide.desc}
                </p>

                <div className='flex gap-3'>
                  {slide.genres.map((genre, i) => (
                    <p 
                    key={i}
                    className='text-[#b9cbe3] hover:text-red-500 transition-colors duration-500'>
                      <a href="#">{genre}{ i < slide.genres.length - 1 && ','}</a>
                    </p>
                  ))}
                </div>

                <div 
                onMouseEnter={()=> setShowIcon(true)}
                onMouseLeave={()=> setShowIcon(false)}
                className='relative flex justify-between items-center p-2 w-1/2 cursor-default rounded-full bg-[#1e1f21]'>
                  <div className='flex items-center gap-2'>
                    <img className='w-5 h-5' src={icon} alt="" />
                    <p className='text-gray-400'>
                      <span className='text-green-500'>{slide.mine}</span>/min</p>
                  </div>

                  <span className={`p-0.5 rounded-full mr-2
                    ${ showIcon ? 'bg-[#b9cbe3]' : 'bg-[#b9cbe3]/40'}
                  `}></span>

                {showIcon && <div className='absolute border border-[#b9cbe3] bottom-10 left-7 p-1 rounded-md bg-[#b9cbe3] after:content-[""] after:absolute after:top-full after:left-1/2 after:translate-x-1/2 after:border-8 after:border-transparent
                  after:border-t-[#b9cbe3]'>
                    <p className='text-xs text-black'>You earn FXC per min</p>
                  </div>}
                </div>
              
                {/* Buttons */}
                <div className="flex items-center gap-3 mt-4">
                  {/* Watch Button */}
                  <div className="group relative">
                    <button
                      className="
                        w-[11rem] py-3 rounded-full bg-[#b9cbe3] text-black font-medium 
                        overflow-hidden relative isolate
                      "
                    >
                      <span className="relative z-10">Watch Now</span>

                      {/* expanding background */}
                      <span
                        className="
                          absolute inset-0 bg-red-500 
                          scale-0 group-hover:scale-150
                          transition-transform duration-500 ease-out 
                          rounded-full
                        "
                      />
                    </button>
                  </div>

                  {/* Bookmark Button */}
                  <button  
                    className="w-[3.5rem] h-[3.5rem] flex items-center justify-center rounded-full bg-black text-[#8d8b8b] hover:text-yellow-500 transition"
                  >
                    <FaRegBookmark size={22} />
                  </button>
              </div>
              </div>
            </div>
          ))}
      </div>

      {/* Pagination Buttons */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-3 pb-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={()=> setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition
                ${currentIndex === i ? 'bg-red-500 w-3 h-3 scale-110' : 'bg-red-500/40'}
              `}
            />
          ))}
      </div>
  </main>
  )
}

export default Hero