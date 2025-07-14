import { FaHome } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { PiPhoneCall } from "react-icons/pi";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoIosHelpCircle } from "react-icons/io";


export default function Navbar() {
    const MENUDATA = [
        { name: "Home", icon: <FaHome size={18} />, link: "/" },
        { name: "About", icon: <FaBuildingColumns size={17} />, link: "/about" },
        { name: "Contact Us", icon: <PiPhoneCall size={19} />, link: "/contact_us" },
        { name: "Services", icon: <MdMiscellaneousServices size={18} />, link: "/services" },
        { name: "Help", icon: <IoIosHelpCircle size={18} />, link: "/help" },
    ]

    return (
        <nav className="flex items-center justify-between bg-gradient-to-r from-slate-900 to-gray-700 py-4 px-8">
            <a href="/"><h1 className="text-white text-2xl font-bold hover:scale-125 duration-200"><span className="text-red-500 text-3xl font-extrabold">J</span>atin</h1></a>

            {/*navlinks*/}
            <ul className="flex gap-10 items-center">
                {MENUDATA.map(({ name, icon, link }, k) => (
                    <li key={k}>
                        <a href={link} className="flex gap-2 items-center text-white hover:text-gray-400 transition duration-200" >{icon}
                            <span>{name}</span>
                        </a>
                    </li>
                ))}
            </ul>

            {/*buttons signup and signin*/}
            <div className="flex gap-3 items-center">
                <button className="px-4 py-2 bg-white rounded-lg hover:bg-gray-400 transition duration-200 hover:translate-y-[-3px] active:scale-[0.9]">Sign In</button>
                <button className="px-4 py-2 bg-black rounded-lg text-white hover:bg-gray-800 transition duration-200 hover:translate-y-[-3px] active:scale-[0.9]">Sign Up</button>
            </div>

        </nav>
    )
}

