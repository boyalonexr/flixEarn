import { useState } from "react";
import { RiHome2Line, RiArrowDropDownLine } from "react-icons/ri";
import { MdLiveTv, MdOutlineLocalMovies,  MdPlaylistAddCheck } from "react-icons/md";
import { FiGrid } from "react-icons/fi";
import { FaTv } from "react-icons/fa";

function Navigation({ toggleActivePopUp, active }) {
  // State for active item
  const [activeItem, setActiveItem] = useState("home");

  // Navigation items stored in an object/array
  const navItems = [
    {key: "home", name: "Home", icon: <RiHome2Line size={20} />,
    },
    {key: "movies", name: "Movies", icon: <MdOutlineLocalMovies size={20} />, count: 25974,
    },
    {key: "tv-series", name: "TV Series", icon: <FaTv size={20} />,
    count: 7208,
    },
    {key: "online-tv", name: "Online TV", icon: <MdLiveTv size={20} />,
    },
    {key: "catergories", name: "Catergories", icon: <FiGrid size={20} />, dropdown: true
    },
    {key: "watchlist", name: "Watchlist", icon: <MdPlaylistAddCheck size={20} />, count: 38,
    },
  ];

  return (
    <nav
      className={`bg-[#141414] text-white h-screen w-full fixed top-[10vh] left-0 z-20 px-4
        transform transition-transform duration-500 ease-in-out
        ${active === "menu" ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="space-y-2">
        {navItems.map((item) => {
          const isActive = activeItem === item.key;

          return (
            <section
              key={item.key}
              onClick={() => setActiveItem(item.key)}
              className={`relative flex justify-between items-center h-[3rem] p-4 rounded-full cursor-pointer overflow-hidden
                ${isActive ? "border bg-[#171717] border-[#171717] " : ""}`}
            >
              {/* Red blur background when active */}
              {isActive && (
                <div className="absolute left-0 top-0 h-full w-1/4 bg-red-500 blur-2xl opacity-30 transition-all duration-500" />
              )}

              <button className="flex items-center gap-2 z-10">
                <span
                  className={`transition-colors duration-300 ${
                    isActive ? "text-red-600" : "text-white"
                  }`}
                >
                  {item.icon}
                </span>
                <h2 className="font-medium text-sm">{item.name}</h2>

                <span className="pt-1">{item.dropdown ? <RiArrowDropDownLine size={20} /> : null}</span>
              </button>

              { item.count ? 
                <p className="z-10 bg-[#232323] p-1 text-xs rounded-full px-4">{item.count.toLocaleString()}</p> : null}
            </section>
          );
        })}
      </div>
    </nav>
  );
}

export default Navigation;



// import { useState } from "react";
// import {
//   RiHome2Line,
//   RiMovie2Line,
//   RiTv2Line,
//   RiGridLine,
//   RiBroadcastLine,
// } from "react-icons/ri";

// export default function Sidebar() {
//   const [openCategories, setOpenCategories] = useState(true);
//   const [activeCategory, setActiveCategory] = useState("Adventure");

//   const categories = [
//     { name: "Action", count: 462 },
//     { name: "Adventure", count: 1204 },
//     { name: "Animation", count: 89 },
//     { name: "Biography", count: 103 },
//     { name: "Comedy", count: 2094 },
//     { name: "Documentary", count: 923 },
//     { name: "Drama", count: 781 },
//     { name: "Education", count: 62 },
//     { name: "Fantasy", count: 803 },
//     { name: "History", count: 1942 },
//     { name: "Horror", count: 693 },
//   ];

//   return (
//     <div className="w-64 bg-black h-screen p-4 flex flex-col text-gray-300">
//       {/* Logo */}
//       <div className="flex items-center space-x-2 mb-6">
//         <span className="text-2xl font-bold text-white">
//           Flix<span className="text-red-500">Coin</span>
//         </span>
//       </div>

//       {/* Active Home Button */}
//       <button className="flex items-center space-x-3 bg-red-600 text-white rounded-2xl py-3 px-4 mb-3 shadow-md shadow-red-900/30">
//         <RiHome2Line size={20} />
//         <span className="font-medium">Home</span>
//       </button>

//       {/* Movies */}
//       <button className="flex items-center space-x-3 py-3 px-4 hover:bg-white/10 rounded-2xl transition mb-2">
//         <RiMovie2Line size={20} />
//         <span>Movies</span>
//       </button>

//       {/* TV Series */}
//       <button className="flex items-center space-x-3 py-3 px-4 hover:bg-white/10 rounded-2xl transition mb-2">
//         <RiTv2Line size={20} />
//         <span>TV Series</span>
//       </button>

//       {/* Online TV */}
//       <button className="flex items-center space-x-3 py-3 px-4 hover:bg-white/10 rounded-2xl transition mb-2">
//         <RiBroadcastLine size={20} />
//         <span>Online TV</span>
//       </button>

//       {/* Categories Toggle */}
//       <button
//         onClick={() => setOpenCategories(!openCategories)}
//         className="flex items-center space-x-3 py-3 px-4 hover:bg-white/10 rounded-2xl transition"
//       >
//         <RiGridLine size={20} />
//         <span>Categories</span>
//       </button>

//       {/* Categories Dropdown */}
//       {openCategories && (
//         <div className="ml-4 mt-2 bg-neutral-900 rounded-2xl p-3 space-y-2 shadow-md">
//           {categories.map((cat) => (
//             <div
//               key={cat.name}
//               onClick={() => setActiveCategory(cat.name)}
//               className={`flex justify-between items-center px-2 py-1 rounded-lg cursor-pointer transition ${
//                 activeCategory === cat.name
//                   ? "text-red-500"
//                   : "text-gray-300 hover:text-white"
//               }`}
//             >
//               <span className="flex items-center space-x-2">
//                 <span
//                   className={`h-2 w-2 rounded-full ${
//                     activeCategory === cat.name
//                       ? "bg-red-500"
//                       : "bg-gray-500"
//                   }`}
//                 ></span>
//                 <span>{cat.name}</span>
//               </span>
//               <span className="text-sm">{cat.count.toLocaleString()}</span>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }