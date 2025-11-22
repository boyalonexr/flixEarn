import { IoRocketOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";
import { IoGiftOutline } from "react-icons/io5";
import { LuBan, LuCalendarClock } from "react-icons/lu";
import { GrAnnounce } from "react-icons/gr";

const priceData = [
  {
    title: "Basic",
    price: "Free",
    color: "#1aaa67",
     backgroundColor: "#fff",
    features: [
      { icon: LuCalendarClock, text: "Unlimited Time", active: true },
      { icon: IoRocketOutline, text: "49.00 FXC / min", active: true },
      { icon: GrAnnounce, text: "No Advertising", active: false },
      { icon: AiOutlineFire, text: "Early Access", active: false },
      { icon: IoGiftOutline, text: "Exclusive Contests", active: false },
    ],
  },

  {
    title: "Premium",
    price: "$19.00",
    color: "#1e73ff",
    backgroundColor: "#b9cbe3",
    features: [
      { icon: LuCalendarClock, text: "1 Month", active: true },
      { icon: IoRocketOutline, text: "169.00 FXC / min", active: true },
      { icon: GrAnnounce, text: "No Advertising", active: true },
      { icon: AiOutlineFire, text: "Early Access", active: false },
      { icon: IoGiftOutline, text: "Exclusive Contests", active: false },
    ],
  },

  {
    title: "Elite",
    price: "$49.00",
    color: "#ce2b2b",
    backgroundColor: "#e3b9df",
    features: [
      { icon: LuCalendarClock, text: "3 Months", color: "#ce2b2b", active: true },
      { icon: IoRocketOutline, text: "89.00 FXC / min", active: true },
      { icon: GrAnnounce, text: "No Advertising", active: true },
      { icon: AiOutlineFire, text: "Early Access", active: true },
      { icon: IoGiftOutline, text: "Exclusive Contests", active: true },
    ],
  },
];

export default function Subscription() {
  return (
    <div
      className="
        bg-[#141414]
        max-w-full sm:min-w-full px-4 md:px-8 
        flex items-start justify-center
      "
    >
      <div className="w-full max-w-lg md:max-w-3xl lg:max-w-4xl x12:max-w-7xl mx-auto">
        <h2 className="text-3xl my-4 text-white font-reddit2 font-medium">
          Open Access
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {priceData.map((plan, index) => (
            <div
              key={index}
              className="relative rounded-[16px] shadow-lg mb-2 w-full"
              style={{ backgroundColor: plan.backgroundColor }}
            >
              <div className="p-7">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold">{plan.title}</h3>
                  <p
                    className="text-3xl font-reddit2"
                    style={{ color: plan.color }}
                  >
                    {plan.price}
                  </p>
                </div>

                <ul className="pt-4 space-y-3 text-sm">
                  {plan.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      {item.active ? (
                        <item.icon size={20} style={{ color: plan.color }} />
                      ) : (
                        <LuBan size={20} className="text-[#63686f]" />
                      )}

                      <span
                        className={
                          "text-[16px] font-semibold " +
                          (item.active ? "text-black" : "text-[#63686f]")
                        }
                      >
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative my-6">
                <div className="w-full h-0 border-b-4 border-dotted border-black" />
                <div
                  className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full"
                  style={{ backgroundColor: "black" }}
                />
                <div
                  className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full"
                  style={{ backgroundColor: "black" }}
                />
              </div>

              <div className="pb-4 px-4">
                <button className="w-full hover:text-white transition-colors duration-500 hover:bg-red-500 text-[14px] bg-[#1e1f21] text-white py-4 rounded-2xl font-semibold tracking-wide">
                  {plan.title === "Basic" ? "GET STARTED" : "CHOOSE PLAN"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
