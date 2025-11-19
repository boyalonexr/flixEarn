import { FiMenu, FiGrid, FiUser } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { RiSignalTowerLine } from "react-icons/ri";
import { useState, useEffect } from "react";

const items = [
  { id: "menu", label: "Menu", Icon: FiMenu },
  { id: "search", label: "Search", Icon: IoIosSearch },
  { id: "catalog", label: "Catalog", Icon: FiGrid },
  { id: "tv", label: "Online TV", Icon: RiSignalTowerLine },
  { id: "profile", label: "Profile", Icon: FiUser },
];

export default function MobileNavBar({toggleActivePopup, active}) {
const [keyboardOpen, setKeyboardOpen] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        const height = window.innerHeight;
        const fullHeight = window.outerHeight;

        setKeyboardOpen(fullHeight - height > 150);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <footer
      className={`fixed bottom-0 left-0 w-full md:hidden bg-[#08090A] border-t border-[#242323] z-40 font-sans
         ${
  keyboardOpen ? "translate-y-full" : "translate-y-0"
}
      `}
      style={{ paddingBottom: "env(safe-area-inset-bottom)", paddingTop: "0.5rem" }}
      aria-label="Bottom navigation"
    >
      <div className="max-w-xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {items.map(({ id, label, Icon }) => {
            const isActive = id === active;
            return (
              <button
                key={id}
                onClick={() => toggleActivePopup(id)}
                aria-label={label}
                className="flex flex-col items-center justify-center w-full pt-1 pb-2"
              >
                <Icon
                  size={20}
                  className={`mb-2 transition-colors ${
                    isActive ? "text-red-500" : "text-gray-500"
                  }`}
                />
                <span
                  className="text-xs tracking-tight transition-colors font-bold text-gray-300"
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