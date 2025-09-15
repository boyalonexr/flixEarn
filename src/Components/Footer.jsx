import { useState } from "react";
import { FiMenu, FiGrid, FiUser } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineLiveTv } from "react-icons/md";
import MovieSearch from "./MovieSearch";

const items = [
  { id: "menu", label: "Menu", Icon: FiMenu },
  { id: "search", label: "Search", Icon: IoIosSearch },
  { id: "catalog", label: "Catalog", Icon: FiGrid },
  { id: "tv", label: "Online TV", Icon: MdOutlineLiveTv },
  { id: "profile", label: "Profile", Icon: FiUser },
];

export default function Footer() {
  const [active, setActive] = useState("menu");
  const toggleActive = (type ) => {
      setActive(prev => (prev === type ? null : type))
  }

  return (
    <footer
      className="fixed bottom-0 left-0 w-full md:hidden bg-[#08090A] border-t border-gray-800 z-40 font-sans"
      style={{ paddingBottom: "env(safe-area-inset-bottom)", paddingTop: "0.5rem" }}
      aria-label="Bottom navigation"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-around items-center">
          {items.map(({ id, label, Icon }) => {
            const isActive = id === active;
            return (
              <button
                key={id}
                onClick={() => toggleActive(id)}
                aria-label={label}
                className="flex flex-col items-center justify-center gap-1 focus:outline-none"
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full transition ${
                    isActive ? "bg-accent/10" : "bg-transparent"
                  }`}
                >
                  <Icon
                    size={20}
                    className={`${isActive ? "text-red-500" : "text-gray-400"} transition`}
                  />
                </div>

                <span
                  className={`text-[11px] tracking-wide ${
                    isActive ? "text-white font-medium" : "text-gray-400"
                  }`}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {active === "search" && 
          <MovieSearch 
            toggleActive={toggleActive}
          />}
    </footer>
  );
}