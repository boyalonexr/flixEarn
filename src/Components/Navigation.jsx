import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  RiHome2Line,
  RiArrowDropDownLine,
  RiMoneyDollarCircleLine,
  RiCustomerService2Line
 } from "react-icons/ri";

import { 
  MdLiveTv, 
  MdOutlineLocalMovies, 
  MdPlaylistAddCheck,
  MdOutlinePrivacyTip 
} from "react-icons/md";

import { FiGrid } from "react-icons/fi";
import { FaTv, FaRegFolder } from "react-icons/fa";
import { BiCoinStack } from "react-icons/bi";
import { HiOutlineTrophy } from "react-icons/hi2";
import { TbChartBubble } from "react-icons/tb";
import { AiOutlineFire } from "react-icons/ai";
import { IoNewspaperOutline } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";

function Navigation({ active }) {
  const [activeItem, setActiveItem] = useState("home");
  const [openCategories, setOpenCategories] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");

  const categories = [
    { name: "Action", count: 462 },
    { name: "Adventure", count: 1204 },
    { name: "Animation", count: 89 },
    { name: "Biography", count: 103 },
    { name: "Comedy", count: 2094 },
    { name: "Documentary", count: 923 },
    { name: "Drama", count: 781 },
    { name: "Education", count: 62 },
    { name: "Fantasy", count: 803 },
    { name: "History", count: 1942 },
    { name: "Horror", count: 693 },
  ];

 const pages = [
  { key: "home_v1", label: "Home v1" },
  { key: "home_v2", label: "Home v2" },
  { key: "catalog_pagination", label: "Catalog (Pagination)" },
  { key: "catalog_dynamic", label: "Catalog (Dynamic Feed)" },
  { key: "movie_html5", label: "Movie (HTML5 Video)" },
  { key: "tv_series_html5", label: "TV Series (HTML5 Video)" },
  { key: "stream_youtube", label: "Stream (YouTube)" },
  { key: "about_us", label: "About Us" },
  { key: "profile", label: "Profile" },
  { key: "article", label: "Article" },
  { key: "actor", label: "Actor" },
  { key: "chat", label: "Chat" },
];


  const navItems = [
    { key: "home", name: "Home", icon: <RiHome2Line size={20} /> },
    { key: "movies", name: "Movies", icon: <MdOutlineLocalMovies size={20} />, count: 25974 },
    { key: "tv-series", name: "TV Series", icon: <FaTv size={20} />, count: 7208 },
    { key: "online-tv", name: "Online TV", icon: <MdLiveTv size={20} /> },
    { key: "categories", name: "Categories", icon: <FiGrid size={20} />, dropdown: true },
    { key: "watchlist", name: "Watchlist", icon: <MdPlaylistAddCheck size={20} />, count: 38 },
    { key: "affiliate", name: "Affiliate", icon: <TbChartBubble size={20} /> },
    { key: "token", name: "Token", icon: <RiMoneyDollarCircleLine size={20} /> },
    { key: "invest", name: "Invest", icon: <BiCoinStack size={20} /> },
    { key: "weekly race", name: "Weekly Race", icon: <HiOutlineTrophy size={20} /> },
    { key: "pages", name: "Pages", icon: <FaRegFolder size={20} />, dropdown: true },
    { key: "early access", name: "Early Access", icon: <AiOutlineFire size={20} /> },
    { key: "news", name: "News", icon: <IoNewspaperOutline size={20} /> },
    { key: "faq", name: "FAQ", icon: <BsQuestionCircle size={20} /> },
    { key: "live support", name: "Live Support", icon: <RiCustomerService2Line size={20} /> },
    { key: "privacy policy", name: "Privacy Policy", icon: <MdOutlinePrivacyTip size={20} /> },
  ];

  function toggleOpenCategories(type) {
    setOpenCategories((prev) => (prev === type ? null : type));
  }

  return (
    <nav
      className={`bg-[#141414] text-white h-screen w-full fixed x12:w-[22%] top-20 left-0 z-20 px-4
        transform border-r border-[#242323] transition-transform duration-500 ease-in-out
        ${active === "menu" ? "translate-x-0" : "-translate-x-full"} 
          x12:translate-x-0`}
    >
      <div className="overflow-y-scroll scrollbar-thin scrollbar-thumb-red-900 my-2 pb-8 pt-4 scrollbar-track-transparent max-h-[80vh]">
        {navItems.map((item, index) => {
          const isActive = activeItem === item.key;

          return (
            <div key={item.key}>
              <section
                onClick={() => {
                  setActiveItem(item.key);

                  if (item.key === "categories") {
                    toggleOpenCategories("categories");
                  } else if (item.key === "pages") {
                    toggleOpenCategories("pages");
                  }else {
                    setOpenCategories(false); 
                  }
                }}
                className={`group relative flex justify-between items-center h-[2.8rem] p-4 rounded-full cursor-pointer overflow-hidden
                  ${isActive ? "border bg-[#171717] border-[#242323]" : ""}`}
              >
                {isActive && (
                  <div className="absolute left-0 top-0 h-full w-1/4 bg-red-500 blur-2xl opacity-30 transition-all duration-500" />
                )}

                <button className="flex items-center gap-2 z-10">
                  <span className={`transition-colors duration-300 group-hover:text-red-600 ${isActive ? "text-red-600" : "text-white"}`}>
                    {item.icon}
                  </span>
                  <h2 className="font-medium text-sm">{item.name}</h2>
                  <span>
                    {item.dropdown ? (
                      <RiArrowDropDownLine
                        size={20}
                        className={`${item.key === openCategories ? "text-red-500" : ""}`}
                      />
                    ) : null}
                  </span>
                </button>

                {item.count ? (
                  <p className="z-10 bg-[#232323] p-1 text-xs rounded-full px-4">{item.count.toLocaleString()}</p>
                ) : null}
              </section>

              {/* Categories dropdown rendered immediately after Categories */}
              {item.key === "categories" && (
                <AnimatePresence>
                  {openCategories === "categories" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4 mt-2 bg-[#1e1f21] rounded-2xl p-3 space-y-2 shadow-md overflow-hidden"
                    >
                      {categories.map((cat) => (
                        <div
                          key={cat.name}
                          onClick={() => setActiveCategory(cat.name)}
                          className={`flex justify-between items-center hover:bg-neutral-800 px-2 py-2 rounded-lg cursor-pointer transition ${
                            activeCategory === cat.name ? "text-red-500" : "text-gray-300 hover:text-white"
                          }`}
                        >
                          <span className="flex items-center space-x-2">
                            <span
                              className={`h-2 w-2 rounded-full ${
                                activeCategory === cat.name ? "bg-red-500" : "bg-gray-500"
                              }`}
                            />
                            <span>{cat.name}</span>
                          </span>
                          <span className="text-sm">{cat.count.toLocaleString()}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

               {item.key === "pages" && (
                <AnimatePresence>
                  {openCategories === "pages" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4 mt-2 bg-[#1e1f21] rounded-2xl p-3 space-y-2 shadow-md overflow-hidden"
                    >
                      <ul className="space-y-2">
                          {pages.map((page) => (
                            <li
                              key={page.key}
                              onClick={() => setActiveCategory(page.label)}
                              className={`flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-neutral-800 cursor-pointer transition ${
                                activeCategory === page.label ? "text-red-500" : "text-gray-300 hover:text-white"
                              }`}
                            >
                              {/* Dot */}
                              <span
                                className={`h-2 w-2 rounded-full ${
                                  activeCategory === page.label ? "bg-red-500" : "bg-gray-500"
                                }`}
                              ></span>

                              {/* Label */}
                              <span>{page.label}</span>
                            </li>
                          ))}
                        </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {/* Render border after 4th item (index === 3) */}
              {(index === 5 || index === 9 || index === 10) && (
                <div className="border-b border-[#242323] my-3" />
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default Navigation;