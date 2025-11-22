import { TbChartBubble } from "react-icons/tb";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiCoinStack } from "react-icons/bi";
import { HiOutlineTrophy } from "react-icons/hi2";
import { FaAppStore } from "react-icons/fa";
import Flag from 'react-world-flags'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube }
 from "react-icons/fa";
 import { FaXTwitter, FaDiscord } from "react-icons/fa6";
 import { BiLogoTelegram } from "react-icons/bi";

function Footer() {
  const companyLinks = ["About Us", "News", "Resources", "Partners"];
  const supportLinks = ["Ask a Question", "FAQ", "Privacy Policy", "Terms & Conditions"];

  const watchEarn = [
    { key: "affiliate", name: "Affiliate", icon: <TbChartBubble />, color: "text-green-500" },
    { key: "token", name: "Token", icon: <RiMoneyDollarCircleLine />, color: "text-red-500" },
    { key: "invest", name: "Invest", icon: <BiCoinStack />, color: "text-blue-500" },
    { key: "weekly", name: "Weekly Race", icon: <HiOutlineTrophy />, color: "text-purple-500" },
  ];

  const watchList = ["Catalog", "Early Access", "Benefits", "Features"];

  const socialIcons = [
    { icon: <FaFacebook />, key: "fb", href: "#" },
    { icon: <FaXTwitter />, key: "ex", href: "#" },
    { icon: <FaInstagram />, key: "ig", href: "#" },
    { icon: <BiLogoTelegram />, key: "tl", href: "#" },
    { icon: <FaDiscord />, key: "di", href: "#" },
  ];

  return (
    <footer className="bg-[#141414] text-white py-10 px-4 md:px-8 x12:max-w-[78%] ml-auto">
      
      {/* Main Flex Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16 mb-6">
        
        {/* Company & Support */}
        <div className="flex flex-row justify-between">
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              {companyLinks.map((item, idx) => (
                <li key={idx} className="hover:text-white transition cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          <div className="w-full">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              {supportLinks.map((item, idx) => (
                <li key={idx} className="hover:text-white transition cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Watch & Earn */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Watch & Earn</h3>
            <div className="flex items-center justify-between">
              {/* Left Column: Affiliate → Weekly Race */}
              <div className="space-y-2 w-full">
                {watchEarn.map((token) => (
                  <button
                    key={token.key}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                  >
                    <span className={`${token.color} text-xl`}>{token.icon}</span>
                    <span className="text-sm font-medium">{token.name}</span>
                  </button>
                ))}
              </div>

              {/* Right Column: Catalog → Features */}
              <ul className="space-y-1 w-full text-gray-400">
                {watchList.map((item, idx) => (
                  <li key={idx} className="hover:text-white transition cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 items-center mt-6">
              <button className="bg-[#b9cbe3] text-[#141414] flex justify-center items-center gap-2 py-3 rounded-full w-full">
                  <FaAppStore size={20} />
                  <p className="text-[14px] font-semibold">APP STORE</p>
              </button>
              <button className="bg-[#b9cbe3] text-[#141414] flex justify-center items-center gap-2 py-3 rounded-full w-full">
                  <IoLogoGooglePlaystore size={20} />
                  <p className="text-[14px] font-semibold">PLAY STORE</p>
              </button>
            </div>

            {/* Text */}
            <p className="text-[#898e95] leading-relaxed text-[14px] pt-7">Web3 Online Cinema. Watch to Earn FXC Coins.  <br/> Experience an innovative gaming ecosystem <br/> where you can both watch and earn.
            </p>

            {/* Language */}
            <div className="flex items-center py-2 gap-2">
              <Flag code="GB" style={{ width: 20, height: 25 }} />

              <p className="text-[#898e95] leading-relaxed text-[14px]">English</p>

            </div>
          </div>

      </div>

      {/* Divider */}
      <div className="border-t border-[#242323]  mb-6"></div>

      {/* Footer Bottom */}
      <div className="flex flex-col mb-10 md:flex-row justify-between items-start gap-2 text-gray-500 text-sm">
        <div className="flex items-center gap-4 text-xl text-gray-400">
          {socialIcons.map((s) => (
            <a key={s.key} href={s.href} className="hover:text-white transition">{s.icon}</a>
          ))}
        </div>
        <p>© {new Date().getFullYear()} FlixEarn. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
