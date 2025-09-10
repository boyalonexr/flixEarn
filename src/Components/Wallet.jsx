import { useState } from "react";
import { motion} from 'framer-motion';
import { MdOutlineCancel } from "react-icons/md";
import eth from '../assets/currencies/eth.svg'
import usdt from '../assets/currencies/usdt.svg'
import btc from '../assets/currencies/btc.svg'
import ltc from '../assets/currencies/ltc.svg'
import usdc from '../assets/currencies/usdc.svg'
import doge from '../assets/currencies/doge.svg'

const cryptoOptions = [
  {icon: btc, name: 'BTC' },
  {icon: eth, name: 'ETH'},
  {icon: ltc, name: 'LTC'},
  {icon: usdc, name: 'USDC'},
  {icon: usdt, name: 'USDT'},
  {icon: doge, name: 'DOGE' },

]
function Wallet({ toogleActive }) {
  const [activeWallet, setActiveWallet] = useState("deposit");
  const [selected, setSelected] = useState(cryptoOptions[0])
  const [ open, setOpen ] = useState()

  const setActiveWalletType = (type) => {
    setActiveWallet(type);
  };


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
        className="fixed top-1/4 left-2 -translate-x-1/2 -translate-y-1/2 bg-[#141414] z-20 text-white p-6 font-reddit rounded-xl shadow-lg w-[95%] max-w-lg">
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

              <button>
                <span>

                </span>

              </button>
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
