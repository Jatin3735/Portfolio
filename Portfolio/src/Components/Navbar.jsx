import { FaHome, FaBars } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { PiPhoneCall } from "react-icons/pi";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoIosHelpCircle } from "react-icons/io";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";




export default function Navbar() {
    const MENUDATA = [
        { name: "Home", icon: <FaHome size={18} />, link: "/" },
        { name: "About", icon: <FaBuildingColumns size={17} />, link: "/about" },
        { name: "Contact Us", icon: <PiPhoneCall size={19} />, link: "/contact_us" },
        { name: "Services", icon: <MdMiscellaneousServices size={18} />, link: "/services" },
        { name: "Help", icon: <IoIosHelpCircle size={18} />, link: "/help" },
    ];

    const [open, Setopen] = useState(true)

    return (
        <nav className="flex items-center justify-between bg-gradient-to-r from-slate-900 to-gray-700 py-5 px-8">
            <a href="/"><h1 className="text-white text-2xl font-bold hover:scale-125 duration-200"><span className="text-red-500 text-3xl font-extrabold">J</span>atin</h1></a>

            {/*navlinks*/}
            <ul className="lg:flex gap-10 items-center hidden">
                {MENUDATA.map(({ name, icon, link }, k) => (
                    <li key={k}>
                        <a href={link} className="flex gap-2 items-center text-white hover:text-gray-400 transition duration-200" >{icon}
                            <span>{name}</span>
                        </a>
                    </li>
                ))}
            </ul>

            {/*buttons signup and signin*/}
            <div className="lg:flex gap-3 items-center hidden">
                <button className="px-4 py-2 bg-white rounded-lg hover:bg-gray-400 transition duration-200 hover:translate-y-[-3px] active:scale-[0.9]">Sign In</button>
                <button className="px-4 py-2 bg-black rounded-lg text-white hover:bg-gray-800 transition duration-200 hover:translate-y-[-3px] active:scale-[0.9]">Sign Up</button>
            </div>

            {/* mobile view  */}

            <div onClick={() => Setopen(!open)} className="text-3xl text-white lg:hidden">
                {
                    open ? <FaBars className="active:text-gray-400" /> : <RxCross2 className="active:text-gray-400" />
                }
                {
                    !open &&
                    <div className="bg-gradient-to-r from-slate-900 to-gray-700 absolute w-full top-19 left-0 flex flex-col">
                        <ul className="flex flex-col gap-5 items-center text-xl border-black rounded-2xl py-2 mb-3 mx-auto w-[90%] bg-gradient-to-r from-slate-700 to-gray-900">
                            {MENUDATA.map(({ name, icon, link }, k) => (
                                <li key={k}>
                                    <a href={link} className="flex gap-2 items-center text-white hover:text-gray-400 transition duration-200" >{icon}
                                        <span>{name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/*buttons signup and signin*/}
                        <div className="flex gap-3 items-center flex-col pb-5">
                            <button className="px-4 py-2 bg-white rounded-lg text-black hover:bg-gray-400 transition duration-200 hover:translate-y-[-3px] active:scale-[0.9] w-[90%]">Sign In</button>
                            <button className="px-4 py-2 bg-black rounded-lg text-white hover:bg-gray-800 transition duration-200 hover:translate-y-[-3px] active:scale-[0.9] w-[90%]">Sign Up</button>
                        </div>
                    </div>
                }
            </div>

        </nav>
    )
}

