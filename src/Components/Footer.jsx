import { FiMenu, FiGrid, FiUser } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineLiveTv } from "react-icons/md";


const items = [
  { id: "menu", label: "Menu", Icon: FiMenu },
  { id: "search", label: "Search", Icon: IoIosSearch },
  { id: "catalog", label: "Catalog", Icon: FiGrid },
  { id: "tv", label: "Online TV", Icon: MdOutlineLiveTv },
  { id: "profile", label: "Profile", Icon: FiUser },
];

export default function Footer({toggleActivePopup, active}) {

  return (
    <footer
      className="fixed bottom-0 left-0 w-full md:hidden bg-[#08090A] border-t border-[#242323] z-40 font-sans"
      style={{ paddingBottom: "env(safe-area-inset-bottom)", paddingTop: "0.5rem" }}
      aria-label="Bottom navigation"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {items.map(({ id, label, Icon }) => {
            const isActive = id === active;
            return (
              <button
                key={id}
                onClick={() => toggleActivePopup(id)}
                aria-label={label}
                className="flex flex-col items-center justify-center w-full py-2"
              >
                <Icon
                  size={24}
                  className={`mb-1 transition-colors ${
                    isActive ? "text-red-500" : "text-gray-400"
                  }`}
                />
                <span
                  className={`text-xs tracking-tight transition-colors ${
                    isActive ? "text-white font-medium" : "text-gray-500"
                  }`}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </footer>
  );
}