import cover1 from '../assets/movies/cover1.jpg'
import cover2 from '../assets/movies/cover2.jpg'
import cover3 from '../assets/movies/cover3.jpg'
import cover4 from '../assets/movies/cover4.jpg'
import cover5 from '../assets/movies/cover5.jpg'
import cover6 from '../assets/movies/cover6.jpg'
import cover7 from '../assets/movies/cover7.jpg'
import cover8 from '../assets/movies/cover8.jpg'
import cover9 from '../assets/movies/cover9.jpg'
import cover10 from '../assets/movies/cover10.jpg'
import cover11 from '../assets/movies/cover11.jpg'
import cover12 from '../assets/movies/cover12.jpg'
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


export const balanceOptions = [
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

export const notification = [
    {icon: flix, msg: "Received 38 FXC", time: "3 hours ago" },
    {icon: btc, msg: "Received 0.00056 BTC", time: "5 hours ago" },
    {icon: usdt, msg: "Withdrawn 250 USDT", time: "6 hours ago" },
    {icon: doge, msg: "Received 17 DOGE", time: "9 hours ago" },
  ]

export const moviesData = [
  { id: 1, title: "Lost in the Abyss", rating: "8.4", imgSrc: cover1, genre: 'Romance, Drama', cryptoIcon: flix, rate: '+0.005', isNew: true },
  { id: 2, title: "Benched", rating: "7.1", imgSrc: cover2, genre: 'Action, Thriller', cryptoIcon: btc, rate: '+0.003', isNew: false },
  { id: 3, title: "Frozen Dreams", rating: "7.5", imgSrc: cover3, genre: 'Comedy, Family', cryptoIcon: eth, rate: '+0.0009', isNew: true },
  { id: 4, title: "Quantum Heist", rating: "8.8", imgSrc: cover4, genre: 'Sci-Fi, Action', cryptoIcon: avax, rate: '+0.006', isNew: true },
  { id: 5, title: "The Silent Shore", rating: "6.9", imgSrc: cover5, genre: 'Drama, Mystery', cryptoIcon: flix, rate: '+0.002', isNew: false },
  { id: 6, title: "Neon Pulse", rating: "7.6", imgSrc: cover6, genre: 'Thriller, Cyberpunk', cryptoIcon: matic, rate: '+0.004', isNew: true },
  { id: 7, title: "Echoes of War", rating: "8.2", imgSrc: cover7, genre: 'War, Historical', cryptoIcon: ltc, rate: '+0.0055', isNew: false },
  { id: 8, title: "Midnight Circuit", rating: "7.4", imgSrc: cover8, genre: 'Action, Techno-Thriller', cryptoIcon: usdt, rate: '+0.0035', isNew: false },
  { id: 9, title: "Crimson Mirage", rating: "7.8", imgSrc: cover9, genre: 'Fantasy, Adventure', cryptoIcon: xrp, rate: '+0.0047', isNew: true },
  { id: 10, title: "Steel Reign", rating: "8.0", imgSrc: cover10, genre: 'Action, Military', cryptoIcon: doge, rate: '+0.0052', isNew: true },
  { id: 11, title: "Whispers in the Fog", rating: "7.3", imgSrc: cover11, genre: 'Mystery, Thriller', cryptoIcon: bch, rate: '+0.0028', isNew: false },
  { id: 12, title: "Solaris Divide", rating: "8.6", imgSrc: cover12, genre: 'Sci-Fi, Drama', cryptoIcon: dash, rate: '+0.0065', isNew: true },
];
