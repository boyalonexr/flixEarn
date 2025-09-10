import { useState } from "react";
import { LuWallet } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { MdSubscriptions, MdPlaylistAddCheck, MdAttachMoney } from "react-icons/md";
import { BiMessageAltDetail } from "react-icons/bi";
import flix from '../assets/currencies/flixcoin.svg'
import usdt from '../assets/currencies/usdt.svg'
import btc from '../assets/currencies/btc.svg'
import doge from '../assets/currencies/doge.svg'
import Wallet from '../Components/Wallet'
import { AnimatePresence } from "framer-motion";

function Header() {
  const [activePopup, setActivePopup] = useState(null)

  const notification = [
    {icon: flix, msg: "Received 38 FXC", time: "3 hours ago" },
    {icon: btc, msg: "Received 0.00056 BTC", time: "5 hours ago" },
    {icon: usdt, msg: "Withdrawn 250 USDT", time: "6 hours ago" },
    {icon: doge, msg: "Received 17 DOGE", time: "9 hours ago" },
  ]

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
             
            <button 
            onClick={() => toogleActive("wallet")}
            className="bg-green-500 p-2 rounded-full">
              <LuWallet />
            </button>

          <AnimatePresence>
            { activePopup === 'wallet' && 
              <Wallet 
              toogleActive = {toogleActive}
              />}
 
          </AnimatePresence>
            
          </div>

          <div className="relative">
            <button 
            onClick={() => toogleActive("notify")}
            className={`relative p-2 rounded-full 
                        hover:bg-red-500 hover:text-white 
                        transition-colors duration-500
                        ${activePopup === 'notify' 
                          ? 'bg-red-500 text-white' 
                          : 'bg-[#b9cbe3]'}`}>
              <IoMdNotificationsOutline />
            
              <span className="absolute -top-1 -right-1 w-5 h-5  bg-red-500 text-white text-xs flex justify-center items-center rounded-full">{notification.length}</span>
            </button>
            {activePopup === 'notify' && (
              <>
                <div 
                  className="fixed inset-0 z-10"
                  onClick={() => toogleActive(false)} 
                />

                <div 
                  className="absolute right-0 z-20 bg-[#141414] text-[#dfdede] w-60 text-sm rounded-xl border border-gray-800 p-4 pt-6"
                >
                  {notification.map((data, index)=> (
                    <div key={index} className="flex flex-col mb-3">
                      <div className="flex gap-2">
                        <img className="w-5 h-5" src={data.icon} alt="" />
                        <h2 className="font-medium">{data.msg}</h2>
                      </div>
                      <p className="text-zinc-400 text-[12px] pl-3">{data.time}</p>
                    </div>
                  ))}

                  <div 
                    onClick={()=> toogleActive(false)}
                    className="text-center font-medium uppercase border-t pt-2 transition-colors duration-500 hover:text-red-500 cursor-pointer"
                  >
                    Clear All
                  </div>
                </div>
              </>
            )}

          </div>

          <div className="relative">
           <button 
            onClick={() => toogleActive("user")}
            className={`p-2 rounded-full 
                        hover:bg-red-500 hover:text-white 
                        transition-colors duration-500
                        ${activePopup === 'user' 
                          ? 'bg-red-500 text-white' 
                          : 'bg-[#b9cbe3]'}`}>
            <FiUser />
          </button>


           {activePopup === 'user' && <div className="absolute -right-2 bg-[#141414] text-white w-40 rounded-xl border border-gray-800 p-4 pt-6">
              <div 
              onClick={()=> toogleActive(false)}
              className="fixed inset-0"/>

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