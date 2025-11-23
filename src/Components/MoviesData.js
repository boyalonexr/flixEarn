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

// Partner Images
import logo1 from "../assets/partners/logo1.svg";
import logo2 from "../assets/partners/logo2.svg";
import logo3 from "../assets/partners/logo3.svg";
import logo4 from "../assets/partners/logo4.svg";
import logo5 from "../assets/partners/logo5.svg";
import logo6 from "../assets/partners/logo6.svg";
import logo7 from "../assets/partners/logo7.svg";
import logo8 from "../assets/partners/logo8.svg";



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

const colors = ["#f87171", "#fbbf24", "#34d399", "#60a5fa", "#a78bfa", "#f472b6"];

export const moviesData = [
  { 
    id: 1,
    key: "Lost-in-the-Abyss",
    title: "Lost in the Abyss",
    rating: "8.4",
    ratingColor: colors[Math.floor(Math.random() * colors.length)],
    desc: "A young couple discovers secrets beneath the ocean that will change their lives forever.",
    imgSrc: "https://res.cloudinary.com/dmg0ohw7r/image/upload/f_auto,q_auto,w_1920/v1763647098/cover1_dcjecm.jpg",
    genre: "Romance, Drama",
    mine: "FXC",
    cryptoIcon: flix,
    rate: "+0.005",
    isNew: true
  },
  { 
    id: 2,
    key: "Benched",
    title: "Benched",
    rating: "7.1",
    ratingColor: colors[Math.floor(Math.random() * colors.length)],
    desc: "A disgraced athlete fights to make a comeback in a world that doubts him.",
    imgSrc: "https://res.cloudinary.com/dmg0ohw7r/image/upload/f_auto,q_auto,w_1920/v1763647097/cover2_qmtfao.jpg",
    genre: "Action, Thriller",
    mine: "BTC",
    cryptoIcon: btc,
    rate: "+0.003",
    isNew: false
  },
  { 
    id: 3,
    key: "Frozen-Dreams",
    title: "Frozen Dreams",
    rating: "7.5",
    ratingColor: colors[Math.floor(Math.random() * colors.length)],
    desc: "A magical journey of a family who discovers their town is frozen in time.",
    imgSrc: "https://res.cloudinary.com/dmg0ohw7r/image/upload/f_auto,q_auto,w_1920/v1763647099/cover3_nzmvat.jpg",
    genre: "Comedy, Family",
    mine: "ETH",
    cryptoIcon: eth,
    rate: "+0.0009",
    isNew: true
  },
  { 
    id: 4,
    key: "Quantum-Heist",
    title: "Quantum Heist",
    rating: "8.8",
    ratingColor: colors[Math.floor(Math.random() * colors.length)],
    desc: "A team of thieves pulls off the impossible using futuristic technology.",
    imgSrc: "https://res.cloudinary.com/dmg0ohw7r/image/upload/f_auto,q_auto,w_1920/v1763647101/cover4_ijjile.jpg",
    genre: "Sci-Fi, Action",
    mine: "AVAX",
    cryptoIcon: avax,
    rate: "+0.006",
    isNew: true
  },
  { 
    id: 5,
    key: "The-Silent-Shore",
    title: "The Silent Shore",
    rating: "6.9",
    ratingColor: colors[Math.floor(Math.random() * colors.length)],
    desc: "A detective investigates a mysterious disappearance along a remote shoreline.",
    imgSrc: "https://res.cloudinary.com/dmg0ohw7r/image/upload/f_auto,q_auto,w_1920/v1763647099/cover5_kc09gt.jpg",
    genre: "Drama, Mystery",
    mine: "FXC",
    cryptoIcon: flix,
    rate: "+0.002",
    isNew: false
  },
  { 
    id: 6,
    key: "Neon-Pulse",
    title: "Neon Pulse",
    rating: "7.6",
    ratingColor: colors[Math.floor(Math.random() * colors.length)],
    desc: "A cyberpunk thriller where a hacker races to uncover a city-wide conspiracy.",
    imgSrc: "https://res.cloudinary.com/dmg0ohw7r/image/upload/f_auto,q_auto,w_1920/v1763647100/cover6_vnicga.jpg",
    genre: "Thriller, Cyberpunk",
    mine: "MATIC",
    cryptoIcon: matic,
    rate: "+0.004",
    isNew: true
  },
  { 
    id: 7,
    key: "Echoes-of-War",
    title: "Echoes of War",
    rating: "8.2",
    ratingColor: colors[Math.floor(Math.random() * colors.length)],
    desc: "A brilliant scientist discovers a way to harness the power of the ocean's currents to create a new, renewable energy source. But when her groundbreaking technology falls into the wrong hands, she must race against time to stop it from being used for evil.",
    imgSrc: "https://res.cloudinary.com/dmg0ohw7r/image/upload/f_auto,q_auto,w_1920/v1763647100/cover7_brtbm5.jpg",
    genre: "War, Historical",
    mine: "LTC",
    cryptoIcon: ltc,
    rate: "+0.0055",
    isNew: false
  },
  { 
    id: 8,
    key: "Midnight-Circuit",
    title: "Midnight Circuit",
    rating: "7.4",
    ratingColor: colors[Math.floor(Math.random() * colors.length)],
    desc: "A high-stakes chase through a city of hackers and neon-lit skyscrapers.",
    imgSrc: "https://res.cloudinary.com/dmg0ohw7r/image/upload/f_auto,q_auto,w_1920/v1763647100/cover8_jlq43m.jpg",
    genre: "Action, Techno-Thriller",
    mine: "USDT",
    cryptoIcon: usdt,
    rate: "+0.0035",
    isNew: false
  },
  { 
    id: 9,
    key: "Crimson-Mirage",
    title: "Crimson Mirage",
    rating: "7.8",
    ratingColor: colors[Math.floor(Math.random() * colors.length)],
    desc: "A young hero journeys through a mystical land of illusions to save his world.",
    imgSrc: "https://res.cloudinary.com/dmg0ohw7r/image/upload/f_auto,q_auto,w_1920/v1763647097/cover9_ukgii2.jpg",
    genre: "Fantasy, Adventure",
    mine: "XRP",
    cryptoIcon: xrp,
    rate: "+0.0047",
    isNew: true
  },
  { 
    id: 10,
    key: "Steel-Reign",
    title: "Steel Reign",
    rating: "8.0",
    ratingColor: colors[Math.floor(Math.random() * colors.length)],
    desc: "An elite squad fights to maintain order in a futuristic militarized city.",
    imgSrc: "https://res.cloudinary.com/dmg0ohw7r/image/upload/f_auto,q_auto,w_1920/v1763647097/cover10_diek1x.jpg",
    genre: "Action, Military",
    mine: "DOGE",
    cryptoIcon: doge,
    rate: "+0.0052",
    isNew: true
  },
  { 
    id: 11,
    key: "Whispers-in-the-Fog",
    title: "Whispers in the Fog",
    rating: "7.3",
    ratingColor: colors[Math.floor(Math.random() * colors.length)],
    desc: "A detective uncovers hidden secrets in a fog-covered city that never sleeps.",
    imgSrc: "https://res.cloudinary.com/dmg0ohw7r/image/upload/f_auto,q_auto,w_1920/v1763647103/cover11_yopuit.jpg",
    genre: "Mystery, Thriller",
    mine: "BCH",
    cryptoIcon: bch,
    rate: "+0.0028",
    isNew: false
  },
  { 
    id: 12,
    key: "Solaris-Divide",
    title: "Solaris Divide",
    rating: "8.6",
    ratingColor: colors[Math.floor(Math.random() * colors.length)],
    desc: "Two factions fight for control of a planet rich in resources and ancient secrets.",
    imgSrc: "https://res.cloudinary.com/dmg0ohw7r/image/upload/f_auto,q_auto,w_1920/v1763647099/cover12_rxzbhv.jpg",
    genre: "Sci-Fi, Drama",
    mine: "DASH",
    cryptoIcon: dash,
    rate: "+0.0065",
    isNew: true
  },
];

export const images = [
  {
    id: 1,
    src: logo1,
    alt: "Partner Logo 1",
  },
  {
    id: 2,
    src: logo2,
    alt: "Partner Logo 2",
  },
  {
    id: 3,
    src: logo3,
    alt: "Partner Logo 3",
  },
  {
    id: 4,
    src: logo4,
    alt: "Partner Logo 4",
  },
  {
    id: 5,
    src: logo5,
    alt: "Partner Logo 5",
  },
  {
    id: 6,
    src: logo6,
    alt: "Partner Logo 6",
  },
  {
    id: 7,
    src: logo7,
    alt: "Partner Logo 7",
  },
  {
    id: 8,
    src: logo8,
    alt: "Partner Logo 8",
  },
];


