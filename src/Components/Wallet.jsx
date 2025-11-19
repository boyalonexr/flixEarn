import { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineCancel, MdContentCopy } from "react-icons/md";

import eth from "../assets/currencies/eth.svg";
import usdt from "../assets/currencies/usdt.svg";
import btc from "../assets/currencies/btc.svg";
import ltc from "../assets/currencies/ltc.svg";
import usdc from "../assets/currencies/usdc.svg";
import doge from "../assets/currencies/doge.svg";

const cryptoOptions = [
  { icon: btc, name: "BTC", amount: 0.007025 },
  { icon: eth, name: "ETH", amount: 0.00 },
  { icon: ltc, name: "LTC", amount: 0.00 },
  { icon: usdc, name: "USDC", amount: 0.00 },
  { icon: usdt, name: "USDT", amount: 107.03 },
  { icon: doge, name: "DOGE", amount: 0.00 },
];

const networkOptions = [{ name: "TRC-20" }, { name: "ERC-20" }, { name: "BEP-20" }];

function Wallet({ toogleActive }) {
  const [activeWallet, setActiveWallet] = useState("deposit");
  const [selected, setSelected] = useState(cryptoOptions[0]);
  const [selectedNetwork, setSelectedNetwork] = useState(networkOptions[0]);
  const [open, setOpen] = useState(null);
  const [copied, setCopied] = useState(false);
  const [max, setMax] = useState(false);
  const address = "TWdqXPvsDgLdyKdo4aLYB7YQ7YHMeKvJio";

  // ✅ NEW: Separate states for Buy Crypto section
  const [buyCrypto, setBuyCrypto] = useState(cryptoOptions[0]);
  const [payWithCrypto, setPayWithCrypto] = useState(cryptoOptions[4]); // Default USDT

  const toggleOpen = (type) => {
    setOpen((prev) => (prev === type ? null : type));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const setActiveWalletType = (type) => {
    setActiveWallet(type);
    setOpen(null); // ✅ Close dropdown when switching wallet tab
  };

  return (
    <>
      <div 
      onClick={()=> toogleActive(false)}
      className="fixed inset-0 bg-black/80 z-10" />

      <motion.div
        key="wallet"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 100 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="fixed left-0 -top-3 right-0 bg-[#141414] z-50 text-white p-6 font-reddit rounded-xl shadow-lg w-[95%] mx-auto max-w-md"
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl">Wallet</h1>
          <button onClick={() => toogleActive(false)} className="text-2xl text-gray-500">
            <MdOutlineCancel />
          </button>
        </div>

        {/* Wallet Type Switcher */}
        <div className="flex justify-around gap-2 bg-[#1e1f21] pt-3 rounded-full px-8 text-sm">
          {["deposit", "withdraw", "purchase"].map((type) => (
            <button key={type} onClick={() => setActiveWalletType(type)}>
              <h2
                className={`border-red-500 pb-2 transition-all duration-300 ${
                  activeWallet === type ? "border-b-2 text-white" : "text-[#888b90] border-0"
                }`}
              >
                {type === "deposit"
                  ? "Deposit"
                  : type === "withdraw"
                  ? "Withdrawal"
                  : "Buy Crypto"}
              </h2>
            </button>
          ))}
        </div>

        {/* ====================== CONTENT AREA ====================== */}
        <div className="relative mt-6 min-h-[100px] text-sm text-[#888b90]">
          {/* ====================== DEPOSIT ====================== */}
          {activeWallet === "deposit" && (
            <div className="transition-all duration-300 animate-fade-in">
              <p>
                Currency <span className="text-red-500">*</span>
              </p>

              <button
                onClick={() => toggleOpen("currency")}
                className={`flex items-center transition-all duration-500 justify-between w-full bg-[#1e1f21] px-4 h-12 mt-2 text-white rounded-full 
                  ${open === "currency" ? "border-red-500 border" : ""}`}
              >
                <span className="flex items-center gap-2">
                  <img className="w-1/4" src={selected.icon} alt="" />
                  <p>{selected.name}</p>
                </span>
                <span className={`p-2 ${open === "currency" ? "text-red-500" : "text-gray-400"}`}>
                  &#9662;
                </span>
              </button>

              <p className="mt-4">
                Network <span className="text-red-500">*</span>
              </p>
              <button
                onClick={() => toggleOpen("network")}
                className={`flex items-center transition-all duration-500 justify-between w-full bg-[#1e1f21] h-12 px-4 mt-3 text-white rounded-full 
                  ${open === "network" ? "border-red-500 border" : ""}`}
              >
                <p className="capitalize">{selectedNetwork.name}</p>
                <span className={`p-2 ${open === "network" ? "text-red-500" : "text-gray-400"}`}>
                  &#9662;
                </span>
              </button>

              <div className="w-full relative">
                {copied && (
                  <span className="absolute -top-2 right-0 bg-[#27272a] text-xs px-3 py-1.5 rounded-full text-white shadow-lg animate-fade-in tooltip-copied">
                    Copied!
                  </span>
                )}

                <p className="mt-6">Your USDT (TRC-20) deposit address</p>
                <button
                  onClick={handleCopy}
                  className="flex items-center transition-all duration-500 justify-between w-full bg-[#1e1f21] h-12 px-4 mt-3 text-white rounded-full gap-2"
                >
                  <div className="w-[85%] overflow-y-auto">
                    <p>{address}</p>
                  </div>
                  <div>
                    <MdContentCopy className={`text-lg ${copied ? "text-red-500" : "text-zinc-400"}`} />
                  </div>
                </button>

                <p className="mt-6 mb-4 text-center">Minimum deposit is 10.00 USDT. Only send USDT to this address, 1 confirmation required.</p>
              </div>

              {open === "currency" && (
                <div className="absolute top-1/4 -mt-1 max-h-[11rem] w-full bg-[#141414] border overflow-y-scroll scrollbar-thin scrollbar-thumb-red-800 scrollbar-track-transparent border-zinc-700 rounded-xl text-white custom-scrollbar py-2 px-3">
                  {cryptoOptions.map((crypto, index) => (
                    <button
                      onClick={() => {
                        setSelected(crypto);
                        setOpen(null);
                      }}
                      key={index}
                      className="flex py-2 items-center gap-2 w-full"
                    >
                      <img className="w-[1.5rem]" src={crypto.icon} alt="" />
                      <p>{crypto.name}</p>
                    </button>
                  ))}
                </div>
              )}

              {open === "network" && (
                <div className="absolute top-1/2 mt-1 max-h-40 w-full bg-[#141414] border border-zinc-700 rounded-xl text-white custom-scrollbar px-3">
                  {networkOptions.map((network, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedNetwork(network);
                        setOpen(null);
                      }}
                      className="flex p-2 items-center gap-2 w-full"
                    >
                      <p className={`${selectedNetwork.name === network.name ? "text-red-500" : "text-white"}`}>
                        {network.name}
                      </p>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ====================== WITHDRAW ====================== */}
           {activeWallet === "withdraw" && (
            <div className="transition-all duration-300 animate-fade-in">
              <div className="max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent pr-1">
                <p>Currency <span className="text-red-500">*</span></p>

              <button 
                onClick={()=> toggleOpen('currency')}
                className={
                  `flex items-center transition-all duration-500 justify-between w-full bg-[#1e1f21] px-4 h-11 mt-2 text-white rounded-full 
                  ${ open === 'currency' ? 'border-red-500 border' : ''}`}>
                <span className="flex items-center gap-2">
                  <img className="w-[1.3rem]" src={selected.icon} alt="" />
                  <p>{selected.amount}</p>
                </span>

                <span className={`p-2 ${open === 'currency' ? 'text-red-500' : 'text-gray-400'}`}>
                  &#9662;
                </span>
              </button>

              <form className="mt-4" id="myForm">
                  <label className="block pb-2" for="input1">BTC Address 
                    <span className="text-red-500"> *</span></label>
                  <input className="w-full h-11 rounded-full focus:ring-1 focus:ring-red-500 focus:outline-none  bg-[#1e1f21] transition-all duration-500 px-4" type="text" id="input1" name="input1" required />

                  <label className="relative block pb-2 mt-3" for="input2">Amount 
                    <span className="text-red-500"> *</span>
                    <span className="absolute right-2">{selected.amount}</span>
                  </label>

                  <div className="flex relative">
                  <input className="w-full h-11 rounded-l-full transition-all duration-500 border-r border-black  focus:ring-1 focus:ring-red-500 focus:outline-none bg-[#1e1f21] px-4" type="text" placeholder={max ? selected.amount : ''} id="input2" name="input2" required />

                  <img className="w-[1.2rem] absolute right-1/4 mr-2 top-3" src={selected.icon} alt="" />  

                  <p
                  onClick={()=> setMax(prev => !prev)}
                  className={`px-5 transition-all duration-500 h-11 rounded-r-full bg-[#1e1f21] flex items-center
                    ${ max ? 'text-red-500' : ''}`}>Max</p>
                  </div>

                  <p className="text-center capitalize py-4">Minimum withdrawal is 0.00005981 BTC. Your withdrawal will have 0.00009583 BTC subtracted from your remaining balance to cover the fee required to process the transaction.</p>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="relative overflow-hidden px-8 py-3 bg-[#a0bffe] rounded-full text-black group w-2/4"
                  >
                    <span className="relative z-10 uppercase">Withdrawal</span>

                    <span
                      className="absolute inset-0 bg-red-500 opacity-2 rounded-full transform scale-x-0 origin-center transition-transform duration-500 ease-out group-hover:scale-x-100"
                    ></span>
                  </button>
                </div>
                </form>


              {open === 'currency' && 
              <div className="absolute top-1/4 -mt-4 max-h-40 w-[95%] bg-[#141414] border overflow-y-scroll scrollbar-thin scrollbar-thumb-red-800 scrollbar-track-transparent border-zinc-700 rounded-xl text-white custom-scrollbar py-2 px-3">
                  { cryptoOptions.map(( crypto, index) =>(<button 
                    onClick={()=> {
                      setSelected(crypto)
                      setOpen(false)
                    }}
                    key={index}
                    className="flex justify-between py-2 items-center w-full">
                      <div className="flex gap-2">
                        <img className="w-[1rem]" src={crypto.icon} alt="" />
                        <p>{crypto.name}</p>
                      </div>

                      <p>{crypto.amount}</p>
                  </button>))}
              </div>}
            </div>

              </div>
          )} 

          {/* ====================== BUY CRYPTO (FIXED) ====================== */}
          {activeWallet === "purchase" && (
            <div className="transition-all duration-300 animate-fade-in relative">
              {/* Buy Section */}
              <label htmlFor="purchase1">Buy {buyCrypto.name}</label>
              <div className="transition-all duration-500 justify-end w-full bg-[#1e1f21] rounded-full mt-2 text-white mb-4">
                <div className="flex items-center">
                  <input
                    onClick={() => setOpen(null)}
                    className="bg-[#1e1f21] w-full rounded-l-full h-11 px-4 focus:ring-1 focus:outline-none focus:ring-red-500"
                    type="text"
                    id="purchase1"
                    placeholder="0.00"
                  />

                  <div
                    onClick={() => toggleOpen("buyCurrency")}
                    className={`flex items-center h-11 rounded-r-full ${
                      open === "buyCurrency" ? "border-red-500 border" : "border-l border-l-black"
                    }`}
                  >
                    <span className="flex items-center gap-2 px-4">
                      <img className="w-5 h-5" src={buyCrypto.icon} alt="" />
                      <p>{buyCrypto.name}</p>
                    </span>
                    <span className={`p-3 ${open === "buyCurrency" ? "text-red-500" : "text-gray-400"}`}>
                      &#9662;
                    </span>
                  </div>
                </div>
              </div>

              {/* Pay Section */}
              <label htmlFor="purchase2">Pay with {payWithCrypto.name}</label>
              <div className="transition-all duration-500 justify-end w-full bg-[#1e1f21] rounded-full mt-2 text-white mb-8">
                <div className="flex items-center">
                  <input
                    onClick={() => setOpen(null)}
                    className="bg-[#1e1f21] w-full rounded-l-full h-11 px-4 focus:ring-1 focus:outline-none focus:ring-red-500"
                    type="text"
                    id="purchase2"
                    placeholder={payWithCrypto.amount}
                  />

                  <div
                    onClick={() => toggleOpen("payCurrency")}
                    className={`flex items-center h-11 rounded-r-full ${
                      open === "payCurrency" ? "border-red-500 border" : "border-l border-l-black"
                    }`}
                  >
                    <span className="flex items-center gap-2 px-4">
                      <img className="w-5 h-5" src={payWithCrypto.icon} alt="" />
                      <p>{payWithCrypto.name}</p>
                    </span>
                    <span className={`p-3 ${open === "payCurrency" ? "text-red-500" : "text-gray-400"}`}>
                      &#9662;
                    </span>
                  </div>
                </div>
              </div>

              {/* Exchange Button */}
              <div className="flex justify-center mb-4">
                <button
                  type="submit"
                  className="relative overflow-hidden px-8 py-3 bg-[#a0bffe] rounded-full text-black group w-2/4"
                >
                  <span className="relative z-10 uppercase">Exchange</span>
                  <span className="absolute inset-0 bg-red-500 opacity-2 rounded-full transform scale-x-0 origin-center transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
                </button>
              </div>

              {/* Dropdown for Buy */}
              {open === "buyCurrency" && (
                <div className="absolute bottom-0 right-0 max-h-40 w-1/3 bg-[#141414] border overflow-y-scroll scrollbar-thin scrollbar-thumb-red-800 scrollbar-track-transparent border-zinc-700 rounded-xl text-white custom-scrollbar py-2 px-3">
                  {cryptoOptions.map((crypto, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setBuyCrypto(crypto);
                        setOpen(null);
                      }}
                      className="flex gap-2 py-2 items-center w-full"
                    >
                      <img className="w-[1rem]" src={crypto.icon} alt="" />
                      <p>{crypto.name}</p>
                    </button>
                  ))}
                </div>
              )}

              {/* Dropdown for Pay */}
              {open === "payCurrency" && (
                <div className="absolute top-3/4 -mt-4 right-0 max-h-40 w-1/3 bg-[#141414] border overflow-y-scroll scrollbar-thin scrollbar-thumb-red-800 scrollbar-track-transparent border-zinc-700 rounded-xl text-white custom-scrollbar py-2 px-3">
                  {cryptoOptions.map((crypto, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setPayWithCrypto(crypto);
                        setOpen(null);
                      }}
                      className="flex gap-2 py-2 items-center w-full"
                    >
                      <img className="w-[1rem]" src={crypto.icon} alt="" />
                      <p>{crypto.name}</p>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Wallet;