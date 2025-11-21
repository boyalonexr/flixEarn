import { TbChartBubble } from "react-icons/tb";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiCoinStack } from "react-icons/bi";
import { HiOutlineTrophy } from "react-icons/hi2";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  const footerLinks = [
    {
      title: "Company",
      items: ["About Us", "News", "Resources", "Partners"],
    },
    {
      title: "Support",
      items: ["Ask a Question", "FAQ", "Privacy Policy", "Terms & Conditions"],
    },
  ];

  const watchEarn = [
    { key: "affiliate", name: "Affiliate", icon: <TbChartBubble size={20} />, color: "text-green-500" },
    { key: "token", name: "Token", icon: <RiMoneyDollarCircleLine size={20} />, color: "text-red-500" },
    { key: "invest", name: "Invest", icon: <BiCoinStack size={20} />, color: "text-blue-500" },
    { key: "weekly", name: "Weekly Race", icon: <HiOutlineTrophy size={20} />, color: "text-purple-500" },
  ];

  const watchList = [
    {
      key: "explore",
      items: ["Catalog", "Early Access", "Benefits", "Features"],
    },
  ];

  return (
    <footer className="bg-[#141414] text-white mb-20 py-10 px-4 sm:px-14 md:px-8 md:max-w-[78%] ml-auto">
      <div className="max-w-4xl ml-auto">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {/* Company + Support Links */}
          {footerLinks.map((section, index) => (
            <div key={index} >
              <h3 className="text-md font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-gray-400">
                {section.items.map((item, idx) => (
                  <li key={idx} className="hover:text-white cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

         <div className="space-y-4 w-full">
  <h3 className="text-md font-semibold mb-4">Watch & Earn</h3>

  <div className="grid grid-cols-2 gap-6">
    {/* Watch Earn Buttons */}
    <div className="space-y-2">
      {watchEarn.map((token) => (
        <button
          key={token.key}
          className="flex items-center text-gray-400 gap-2 hover:text-white transition"
        >
          <span className={token.color}>{token.icon}</span>
          <h2 className="font-medium text-sm">{token.name}</h2>
        </button>
      ))}
    </div>

    {/* Watch List Links */}
    <ul className="space-y-2 text-gray-400">
      {watchList[0].items.map((item, idx) => (
        <li key={idx} className="hover:text-white cursor-pointer">
          {item}
        </li>
      ))}
    </ul>
  </div>
</div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} FlixEarn. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;