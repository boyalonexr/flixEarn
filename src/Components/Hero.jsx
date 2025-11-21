import { useState, useRef, useEffect } from "react";
import icon from '../assets/currencies/flixcoin.svg';
import { FaRegBookmark } from "react-icons/fa6";

function Hero() {
  const heroSlides = [
    {
      title: "Savage Beauty",
      rating: 9.8,
      desc: "A brilliant scientist discovers a way...",
      genres: ["Action", "Drama", "Comedy"],
      mine: "+0.005",
      color: "yellow-500",
      img: "https://res.cloudinary.com/dmg0ohw7r/image/upload/f_auto,q_auto,w_1920/v1763622856/bg-1_zvr57l.jpg",
    },
    {
      title: "From the Side",
      rating: 7.1,
      desc: "In a world where magic is outlawed...",
      genres: ["Adventure", "Thriller"],
      mine: "+0.002",
      color: "white",
      img: "https://res.cloudinary.com/dmg0ohw7r/image/upload/f_auto,q_auto,w_1920/v1763622855/bg-2_l7ybjq.jpg",
    },
    {
      title: "Lost Horizon",
      rating: 6.2,
      desc: "When a renowned archaeologist goes missing...",
      genres: ["Adventure", "Fantasy"],
      mine: "+0.002",
      color: "yellow-500",
      img: "https://res.cloudinary.com/dmg0ohw7r/image/upload/f_auto,q_auto,w_1920/v1763622862/bg-3_n928rw.jpg",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null)

  useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  const handleScroll = () => {
    const index = Math.round(
      container.scrollLeft / container.clientWidth
    );

    setCurrentIndex(index);
  };

  container.addEventListener("scroll", handleScroll);
  return () => container.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <main className="relative mt-20 x12:max-w-[78%] w-full ml-auto select-none">

      {/* Scroll Snap Wrapper */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar h-[55vh] md:h-[50vh] x12:h-[90vh]"
      >
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className="relative flex items-center flex-shrink-0 min-w-full bg-cover bg-center px-4 md:px-8 snap-start text-white"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            {/* Dark overlays */}
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />

            {/* Content */}
            <div className="relative flex flex-col justify-center gap-3 w-full max-w-lg md:max-w-3xl lg:max-w-4xl x12:max-w-7xl mx-auto">

              <div className="flex items-center gap-2">
                <h1 className="text-4xl font-medium">{slide.title}</h1>
                <span
                  className={`w-8 h-8 flex justify-center items-center font-medium rounded-full bg-${slide.color} text-black`}
                >
                  {slide.rating}
                </span>
              </div>

              <p className="mt-2 max-w-[90%] text-sm text-gray-300 leading-relaxed">
                {slide.desc}
              </p>

              <div className="flex gap-3">
                {slide.genres.map((g, idx) => (
                  <p key={idx} className="text-[#b9cbe3] hover:text-red-500 transition-colors">
                    <a href="#">{g}{idx < slide.genres.length - 1 && ','}</a>
                  </p>
                ))}
              </div>

              {/* Mining Badge */}
              <div className="relative flex justify-between items-center p-2 w-1/2 rounded-full bg-[#1e1f21]">
                <div className="flex items-center gap-2">
                  <img className="w-5 h-5" src={icon} alt="" />
                  <p className='text-gray-400'>
                    <span className='text-green-500'>{slide.mine}</span>/min
                  </p>
                </div>

                <span className="p-0.5 rounded-full mr-2 bg-[#b9cbe3]/40" />
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 mt-4">
                <button className="w-[11rem] py-3 rounded-full bg-[#b9cbe3] text-black font-medium">
                  Watch Now
                </button>

                <button className="w-[3.5rem] h-[3.5rem] flex items-center justify-center rounded-full bg-black text-[#8d8b8b] hover:text-yellow-500 transition">
                  <FaRegBookmark size={22} />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

        
    {/* Pagination */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 pb-3">
        {heroSlides.map((_, i) => (
         <button
            key={i}
            onClick={() => {
              setCurrentIndex(i);
              scrollRef.current.scrollTo({
                left: i * scrollRef.current.clientWidth,
                behavior: "smooth"
              });
            }}
            className={` rounded-full transition ${
              currentIndex === i
                ? "bg-red-500 w-2 h-2 scale-110"
                : "bg-red-500/40 w-1.5 h-1.5"
            }`}
          />
        ))}
      </div>

    </main>
  );
}

export default Hero;