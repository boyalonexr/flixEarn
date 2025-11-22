import { useRef } from 'react'
import { IoIosArrowBack , IoIosArrowForward } from "react-icons/io";
import { images } from "./MoviesData"


function Partners() {
  const scrollRef = useRef(null)

  const prevScroll = ()=> scrollRef.current.scrollBy({
    left: -300, behavior: "smooth"
  })
  const nextScroll = ()=> scrollRef.current.scrollBy({
    left: 300, behavior: "smooth"
  })

  console.log(scrollRef.current)
  return (
    <div className='bg-[#141414] max-w-full sm:min-w-full px-4 md:px-8 text-white'>
      <div className='w-full max-w-lg md:max-w-3xl lg:max-w-4xl x12:max-w-7xl mx-auto'>
          <div className=" relative flex items-center justify-between">
            <h2 className="text-3xl font-reddit2 font-medium">
              Partners
            </h2>
            <div className="flex items-center gap-3">
              <button
                className="hidden md:block py-2 px-4 bg-[#1E1F21] rounded-full hover:bg-[#2A2B2D] hover:text-red-500 duration-500"
              >
                <p className='text-xs font-semibold font-reddit2'>CONTACT US</p>
              </button>
              <button 
                onClick={prevScroll}
                className="p-2 bg-[#1E1F21] rounded-full hover:bg-[#2A2B2D] hover:text-red-500  transition duration-500">
                  <IoIosArrowBack />
              </button>
              <button 
                onClick={nextScroll}
                className="p-2 bg-[#1E1F21] rounded-full hover:bg-[#2A2B2D] hover:text-red-500  transition duration-500">
                <IoIosArrowForward />
              </button>
            </div>
          </div>  

          <div 
            ref={scrollRef}
            className='py-5 overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-smooth'>
              <div className='flex gap-4 w-[48%] md:w-[23%] lg:w-[18.6%] h-[120px]'>
              { images.map(img => (
                  <div 
                    key={img.id}
                    className='flex snap-start flex-shrink-0 rounded-[12px] items-center justify-center w-full bg-[#1e1f21]'>
                      <img src={img.src} alt={img.alt} />
                    </div>
              ))}
              </div>
          </div>
        </div>

    </div>
  )
}

export default Partners
