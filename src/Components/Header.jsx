import { useState } from "react";
import { LuWallet } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { MdSubscriptions, MdPlaylistAddCheck, MdAttachMoney } from "react-icons/md";
import { BiMessageAltDetail } from "react-icons/bi";



function Header() {
  const [activePopup, setActivePopup] = useState(null)

  const userData = [
    { label: 'Profile', icon: <CgProfile /> },
    { label: 'Subscription', icon: <MdSubscriptions /> },
    { label: 'Watchlist', icon: <MdPlaylistAddCheck /> },
    { label: 'Settings', icon: <IoSettingsOutline /> },
    { label: 'Request', icon: <BiMessageAltDetail /> },
    { label: 'Transactions', icon: <MdAttachMoney /> },
  ]

  const toogleActive = (type ) => {
      setActivePopup(prev => (prev === type ? null : type))
  }

  return (
    <>
    <header className='bg-[#141414] p-4'>
      <div className="flex sm:w-[90%] mx-auto justify-between items-center">
        <div>
          <h1 className='text-white text-3xl font-bold font-reddit'>Flix
            <span className='text-red-500'>Earn</span></h1>
        </div>

        <div className="text-black text-2xl flex gap-2">
          <div>
            <button className="bg-green-500 p-2 rounded-full">
              <LuWallet />
            </button>
            
          </div>

          <div>
            <button className="bg-[#b9cbe3] relative p-2 rounded-full text-black hover:bg-red-500 hover:text-white">
              <IoMdNotificationsOutline />
            
              <span className="absolute -top-1 -right-1 w-5 h-5  bg-red-500 text-white text-xs flex justify-center items-center rounded-full">4</span>
            </button>
          </div>

          <div className="relative">
            <button 
            onClick={()=> toogleActive("user")}
            className="bg-[#b9cbe3] p-2 rounded-full hover:bg-red-500 hover:text-white">
              <FiUser />
            </button>

           {activePopup === 'user' && <div className="absolute -right-2 bg-[#141414] text-white w-40 rounded-xl border border-gray-800 p-4 pt-6">
              <ul>
                {userData.map((data, index) => (
                  <li
                    key={index}
                    className="flex gap-2 items-center text-sm font-semibold py-1 pb-2 cursor-pointer hover:bg-[#222]"
                  >
                    <span className="text-[#81858c] text-lg">
                      {data.icon}</span>
                    {data.label}
                  </li>
                ))}
              </ul>
            </div>}
          </div>

        </div>
      </div>
    </header> 
    </>
  )
}

export default Header	