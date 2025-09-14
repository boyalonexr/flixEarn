import { useState } from "react";
import { LuWallet } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { MdSubscriptions, MdPlaylistAddCheck, MdAttachMoney } from "react-icons/md";
import { BiMessageAltDetail } from "react-icons/bi";
import flix from '../assets/currencies/flixcoin.svg'
import avax from '../assets/currencies/avax.svg'
import bch from '../assets/currencies/bch.svg'
import bnb from '../assets/currencies/bnb.svg'
import dai from '../assets/currencies/dai.svg'
import dash from '../assets/currencies/dash.svg'
import usdt from '../assets/currencies/usdt.svg'
import btc from '../assets/currencies/btc.svg'
import eth from "../assets/currencies/eth.svg";
import ltc from "../assets/currencies/ltc.svg";
import matic from "../assets/currencies/matic.svg";
import trx from "../assets/currencies/trx.svg";
import usdc from "../assets/currencies/usdc.svg";
import doge from '../assets/currencies/doge.svg'
import xrp from "../assets/currencies/xrp.svg";
import MovieSearch from "./MovieSearch";
import Wallet from '../Components/Wallet'
import { RiArrowDropDownLine } from "react-icons/ri";
import { AnimatePresence } from "framer-motion";

const balanceOptions = [
  { icon: flix, name: "FXC", amount: 308.6556473 },
  { icon: avax, name: "AVAX", amount: 0.0235062 },
  { icon: bch, name: "BCH", amount: 13.4000004 },
  { icon: bnb, name: "BNB", amount: 74.0000254 },
  { icon: btc, name: "BTC", amount: 0.0070254 },
  { icon: dai, name: "DAI", amount: 0.0046508 },
  { icon: dash, name: "DASH", amount: 14.0000000 },
  { icon: doge, name: "DOGE", amount: 0.0000000 },
  { icon: eth, name: "ETH", amount: 0.0000000 },
  { icon: ltc, name: "LTC", amount: 0.0000000 },
  { icon: matic, name: "MATIC", amount: 0.0000000 },
  { icon: trx, name: "TRX", amount: 0.00000000 },
  { icon: usdc, name: "USDC", amount: 0.0000000 },
  { icon: usdt, name: "USDT", amount: 107.0375301 },
  { icon: xrp, name: "XRP", amount: 0.0000000 },
];


function Header() {
  const [activePopup, setActivePopup] = useState(null)
  const [ balance, setBalance ] = useState(balanceOptions[13])
  
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
    <header className='bg-[#141414] p-4 md:py-6'>
      <div className="flex max-w-lg md:max-w-3xl mx-auto  justify-between items-center">
        <div>
          <h1 className='text-white text-3xl font-bold font-reddit'>Flix
            <span className='text-red-500'>Earn</span></h1>
        </div>

        <div className="text-black text-2xl flex gap-4">
          <div className="relative flex">
             <button 
                onClick={() => toogleActive("search")}
                className={`p-2 md:p-3 md:mr-4 hidden md:block rounded-full 
                            hover:bg-red-500 hover:text-white 
                            transition-colors duration-500
                            ${activePopup === 'search' 
                              ? 'bg-red-500 text-white' 
                              : 'bg-[#b9cbe3]'}`}>
                <IoIosSearch />
              </button>
             
             <div 
                onClick={() => toogleActive("balance")}
                className="bg-[#1e1f21] font-semibold hidden md:block p-2 md:p-3 rounded-full text-white w-[15rem]">
                <button className="flex items-center gap-4 w-full">
                  <div className="flex items-center">
                    <img className="mx-3 w-[1.5rem]" src={balance.icon} alt="" />
                    <p className="text-base pr-3 w-20">{balance.amount}</p>
                  </div>

                  <RiArrowDropDownLine className={`${activePopup === 'balance' ? 'text-red-500' : ''}`} />
                </button>
              </div>
                
                <button 
                onClick={() => toogleActive("wallet")}
                className="absolute top-0 right-0 bg-green-500 p-2 md:p-3 rounded-full md:rounded-none md:rounded-r-full">
                  <LuWallet />
                </button>

                            
         <AnimatePresence>
            { activePopup === 'search' && 
              <MovieSearch 
              toogleActive = {toogleActive}
              />}
 
          </AnimatePresence>        
          
       {activePopup === 'balance' && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => toogleActive(false)}
            />
            <div 
              // ✅ Added fixed width to popup so it doesn't resize on click
              className="absolute top-10 mt-3 right-0 z-20 bg-[#141414] text-white text-sm rounded-xl border border-gray-800 overflow-hidden w-[15rem]">
              
              {/* Scrollable balance list */}
              <div className="overflow-y-auto max-h-64 p-4 scrollbar-thin scrollbar-thumb-red-700 scrollbar-track-transparent">
                {balanceOptions.map((balance, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setBalance(balance)
                      toogleActive(false)
                    }}
                    // ✅ Added hover effect and fixed layout
                    className="flex justify-between items-center pb-2 cursor-pointer hover:bg-[#1f1f1f] rounded-md px-2"
                  >
                    <div className="flex items-center gap-2">
                      <img className="w-[1.5rem]" src={balance.icon} alt="" />
                      <span className="w-14">{balance.name}</span>
                    </div>

                    <ul className="pt-2 space-y-1">
                      {/* ✅ Added fixed width to amount to avoid shifting */}
                      <li className="w-20 text-right">{balance.amount}</li>
                    </ul>
                  </div>
                ))}
              </div>

              {/* Fixed Settings at bottom */}
              <div className="border-t border-gray-700 p-4 text-center">
                <p className="hover:text-red-500 cursor-pointer">Settings</p>
              </div>
            </div>
          </>
        )}


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
            className={`relative p-2 md:p-3 md:mx-2 rounded-full 
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
            className={`p-2 md:p-3 rounded-full 
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