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
  {icon: btc, name: 'BTC' },
  {icon: eth, name: 'ETH'},
  {icon: ltc, name: 'LTC'},
  {icon: usdc, name: 'USDC'},
  {icon: usdt, name: 'USDT'},
  {icon: doge, name: 'DOGE' },
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
        className="fixed left-0 right-0 bg-[#141414] z-20 text-white p-6 font-reddit rounded-xl shadow-lg w-[95%] mx-auto max-w-lg">
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
                  <img className="w-1/3" src={selected.icon} alt="" />
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
                  flex items-center transition-all duration-500 justify-between w-full bg-[#1e1f21] h-12 px-4 mt-3 text-white rounded-full" >
                    <p>{address}</p>
                    <MdContentCopy className={`text-lg ${copied ? 'text-red-500' : 'text-zinc-400'}`} />
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
                <div className="absolute top-1/2 mt-1 max-h-40 w-full bg-[#141414] border overflow-y-scroll scrollbar-thin scrollbar-thumb-red-700 scrollbar-track-transparent border-zinc-700 rounded-xl mt-0.5 text-white custom-scrollbar px-3">
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
              <p>Withdrawal content goes here</p>
            </div>
          )}
          {activeWallet === "purchase" && (
            <div className="transition-all duration-300 animate-fade-in">
              <p>Buy Crypto content goes here</p>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Wallet;
