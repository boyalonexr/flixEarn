import { useState } from "react";
import { motion} from 'framer-motion';
import { MdOutlineCancel } from "react-icons/md";
import eth from '../assets/currencies/eth.svg'
import usdt from '../assets/currencies/usdt.svg'
import btc from '../assets/currencies/btc.svg'
import ltc from '../assets/currencies/ltc.svg'
import usdc from '../assets/currencies/usdc.svg'
import doge from '../assets/currencies/doge.svg'
import { MdContentCopy } from "react-icons/md";

const cryptoOptions = [
  {icon: btc, name: 'BTC', amount: 0.007025 },
  {icon: eth, name: 'ETH', amount: 0.00},
  {icon: ltc, name: 'LTC', amount: 0.00},
  {icon: usdc, name: 'USDC', amount: 0.00},
  {icon: usdt, name: 'USDT', amount: 107.03},
  {icon: doge, name: 'DOGE', amount: 0.00 },
]

const networkOptions = [
  { name: 'TRC-20' },
  { name: 'ERC-20' },
  { name: 'BEP-20' },
];


function Wallet({ toogleActive }) {
  const [activeWallet, setActiveWallet] = useState("deposit");
  const [selected, setSelected] = useState(cryptoOptions[0])
  const [selectedNetwork, setSelectedNetwork] = useState(networkOptions[0])
  const [ open, setOpen ] = useState(null)
  const address = "TWdqXPvsDgLdyKdo4aLYB7YQ7YHMeKvJio";
  const [copied, setCopied ] = useState(false)


  const setActiveWalletType = (type) => {
    setActiveWallet(type);
  };

  const toogleOpen = (type) => {
    setOpen(prev => ( prev === type ? null : type ))
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(()=> setCopied(false), 2000);
  }

  return (
    <>
      <div 
      className="fixed inset-0 bg-black/80 z-10" />

      <motion.div 
      key="wallet"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 100 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="fixed left-0 top-5 right-0 bg-[#141414] z-20 text-white p-6 font-reddit rounded-xl shadow-lg w-[95%] mx-auto max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl">Wallet</h1>
          <button onClick={() => toogleActive(false)} className="text-2xl text-gray-500">
            <MdOutlineCancel />
          </button>
        </div>

        <div className="flex justify-around gap-2 bg-[#1e1f21] pt-3 rounded-full px-8 text-sm">
          <button onClick={() => setActiveWalletType("deposit")}>
            <h2
              className={`border-red-500 pb-2 transition-all duration-300 ${
                activeWallet === "deposit" ? "border-b-2 text-white" : "text-[#888b90] border-0"
              }`}
            >
              Deposit
            </h2>
          </button>

          <button onClick={() => setActiveWalletType("withdraw")}>
            <h2
              className={`border-red-500 pb-2 transition-all duration-300 ${
                activeWallet === "withdraw" ? "border-b-2 text-white" : "text-[#888b90] border-0"
              }`}
            >
              Withdrawal
            </h2>
          </button>

          <button onClick={() => setActiveWalletType("purchase")}>
            <h2
              className={`border-red-500 pb-2 transition-all duration-300 ${
                activeWallet === "purchase" ? "border-b-2 text-white" : "text-[#888b90] border-0"
              }`}
            >
              Buy Crypto
            </h2>
          </button>
        </div>

        {/* Animated content area */}
        <div className="relative mt-6 min-h-[100px] text-sm text-[#888b90]">

          {activeWallet === "deposit" && (
            <div className="transition-all duration-300 animate-fade-in">
              <p>Currency <span className="text-red-500">*</span></p>

              <button 
                onClick={()=> toogleOpen('currency')}
                className={
                  `flex items-center transition-all duration-500 justify-between w-full bg-[#1e1f21] px-4 h-12 mt-2 text-white rounded-full 
                  ${ open === 'currency' ? 'border-red-500 border' : ''}`}>
                <span className="flex items-center gap-2">
                  <img className="w-1/4" src={selected.icon} alt="" />
                  <p>{selected.name}</p>
                </span>

                <span className={`p-2 ${open === 'currency' ? 'text-red-500' : 'text-gray-400'}`}>
                  &#9662;
                </span>
              </button>

               <p className="mt-4">Network <span className="text-red-500">*</span></p>
              <button 
                onClick={()=> toogleOpen('network')}
                className={
                  `flex items-center transition-all duration-500 justify-between w-full bg-[#1e1f21] h-12 px-4 mt-3 text-white rounded-full 
                  ${ open === 'network' ? 'border-red-500 border' : ''}`}>
                <p className="capitalize">{selectedNetwork.name}</p> 
                
                <span className={`p-2 ${open === 'network' ? 'text-red-500' : 'text-gray-400'}`}>
                  &#9662;
                </span>
              </button>

              <div className="w-full relative">
               { copied && <span 
                  className="absolute -top-2 right-0 bg-[#27272a] text-xs px-3 py-1.5 rounded-full text-white shadow-lg animate-fade-in tooltip-copied">
                  Copied!
                </span>}

                 <p className="mt-6">Your USDT (TRC-20) deposit address</p>
              <button 
                onClick={handleCopy}
                className="
                  flex items-center transition-all duration-500 justify-between w-full bg-[#1e1f21] h-12 px-4 mt-3 text-white rounded-full gap-2" >
                    <div className="w-[85%] overflow-y-auto">
                      <p>{address}</p>
                    </div>
                    <div>
                      <MdContentCopy className={`text-lg ${copied ? 'text-red-500' : 'text-zinc-400'}`} />
                    </div>
              </button>
              </div>

                <p className="mt-6 text-center">Minimum deposit is 10.00 USDT. Only send USDT to this address, 1 confirmation required.</p>

              {open === 'currency' && 
              <div className="absolute top-1/4 -mt-1 max-h-[13rem] w-full bg-[#141414] border overflow-y-scroll scrollbar-thin scrollbar-thumb-red-700 scrollbar-track-transparent border-zinc-700 rounded-xl text-white custom-scrollbar py-2 px-3">
                  { cryptoOptions.map(( crypto, index) =>(<button 
                    onClick={()=> {
                      setSelected(crypto)
                      setOpen(false)
                    }}
                    key={index}
                    className="flex py-2 items-center gap-2 w-full">
                      <img className="w-[2rem]" src={crypto.icon} alt="" />
                      <p>{crypto.name}</p>
                  </button>))}
              </div>}

              {open === 'network' && (
                <div className="absolute top-1/2 mt-1 max-h-40 w-full bg-[#141414] border border-zinc-700 rounded-xl text-white custom-scrollbar px-3">
                  {networkOptions.map((network, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedNetwork(network)
                        setOpen(null);
                      }}
                      className="flex p-2  items-center gap-2 w-full"
                    >
                      <p className={`${ selectedNetwork === network ? 'text-red-500' : 'text-white'}`}>{network.name}</p>
                    </button>
                  ))}
                </div>
          )}
            </div>
          )}

          {activeWallet === "withdraw" && (
            <div className="transition-all duration-300 animate-fade-in">
                <p>Currency <span className="text-red-500">*</span></p>

              <button 
                onClick={()=> toogleOpen('currency')}
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
                  <input className="w-full h-11 rounded-full  bg-[#1e1f21] px-4" type="text" id="input1" name="input1" required />

                  <label className="block pb-2 mt-3" for="input1">Amount 
                    <span className="text-red-500"> *</span>
                    <span className="absolute right-0">{selected.amount}</span>
                  </label>

                  <div className="flex relative">
                  <input className="flex-1 h-11 rounded-l-full  bg-[#1e1f21] px-4" type="text" id="input2" name="input2" required />

                  <img className="w-[1.2rem] absolute right-1/4 mr-2 top-3" src={selected.icon} alt="" />

                  <p className="px-5 py-2 border-l border-black rounded-r-full bg-[#1e1f21] flex items-center">Max</p>
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
              <div className="absolute top-1/4 -mt-7 max-h-40 w-full bg-[#141414] border overflow-y-scroll scrollbar-thin scrollbar-thumb-red-700 scrollbar-track-transparent border-zinc-700 rounded-xl text-white custom-scrollbar py-2 px-3">
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
          )}

          {activeWallet === "purchase" && (
            <div className="transition-all duration-300 animate-fade-in">
              
              <label for="purchase1">Buy Bitcoin</label>

              <button 
                className=
                "transition-all duration-500 justify-end w-full bg-[#1e1f21] rounded-full mt-2 text-white">
                    <div className="flex items-center">
                      <input     
                        className="bg-[#1e1f21] flex-1 rounded-l-full h-11 px-4  focus:ring-1 focus:ring-red-500 focus:outline-none
                        " type="text" id="purchase1" />
                    
                    <div
                      onClick={()=> toogleOpen('currency')}
                      className={`flex h-11 rounded-r-full ${ open === 'currency' ? 'border-red-500 border' : 'border-l border-l-black'}`}>
                      <span className="flex items-center gap-2 px-4">
                        <img className="w-[1.3rem]" src={selected.icon} alt="" />
                        <p>{selected.name}</p>
                      </span>

                      <span className={`p-2 ${open === 'currency' ? 'text-red-500' : 'text-gray-400'}`}>
                        &#9662;
                      </span>
                    </div>
                    
                    </div>
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Wallet;
