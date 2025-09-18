import { FaHome, FaBars } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { PiPhoneCall } from "react-icons/pi";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoIosHelpCircle } from "react-icons/io";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineFeedback } from "react-icons/md";
import { Link } from 'react-router-dom'
import ProfileDropDown from "./ProfileDropDown";
import { Button } from "@headlessui/react";

export default function Navbar() {
    const [open, Setopen] = useState(true);
    const [log, SetLog] = useState(false);

    const MENUDATA = [
        { name: "Home", icon: <FaHome size={18} />, link: "/" },
        { name: "About", icon: <FaBuildingColumns size={17} />, link: "/about" },
        { name: "Contact Us", icon: <PiPhoneCall size={19} />, link: "/contact_us" },
        { name: "Services", icon: <MdMiscellaneousServices size={18} />, link: "/services" },
        { name: "Help", icon: <IoIosHelpCircle size={18} />, link: "/help" },
        { name: "Feedback", icon: <MdOutlineFeedback size={18} />, link: "/feedback" }
    ];

    const Auth = [
        { name: "Sign In", link: "/sign_in", css: "text-black hover:text-white bg-blue-400" },
        { name: "Sign Up", link: "/sign_up", css: "text-white bg-black" },
    ];

    return (
        <nav className="flex items-center justify-between bg-gradient-to-r from-slate-900 to-gray-700 py-5 px-8 relative z-50">
            {/* Logo */}
            <Link to="/">
                <h1 className="text-white text-2xl font-bold hover:scale-125 duration-200">
                    <span className="text-red-500 text-3xl font-extrabold">J</span>atin
                </h1>
            </Link>

            {/* Desktop Nav Links */}
            <ul className="lg:flex gap-10 items-center hidden">
                {MENUDATA.map(({ name, icon, link }, k) => (
                    <li key={k}>
                        <Link to={link} className="flex gap-2 items-center text-white hover:text-gray-400 transition-all duration-200">
                            {icon}
                            <span>{name}</span>
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Desktop Auth Buttons */}
            {
                log ? <ProfileDropDown /> :
                    <div className="md:flex gap-3 items-center hidden">
                        {Auth.map(({ name, link, css }, i) => (
                            <Link to={link} key={i}>
                                <button
                                    className={`px-4 py-2 rounded-lg hover:bg-transparent font-bold  outline-red-500/40 transition-all duration-300 ease-in-out hover:translate-y-[-3px] active:scale-[0.9] hover:shadow-xl hover:outline hover:outline-red-500 hover:shadow-red-500/30 ${css}`}>
                                    {name}
                                </button>
                            </Link>
                        ))}
                    </div>
            }


            {/* Mobile Icon */}
            <div onClick={() => Setopen(!open)} className="text-3xl text-white md:hidden z-50 cursor-pointer">
                {open ? <FaBars className="active:text-gray-400" /> : <RxCross2 className="active:text-gray-400" />}
            </div>

            {/* Mobile Dropdown (always rendered, animated) */}
            <div
                className={`md:hidden bg-gradient-to-r from-slate-900 to-gray-700 absolute w-full left-0 top-19 flex flex-col transition-all duration-500 ease-in-out overflow-hidden ${open ? " opacity-0" : "max-h-[500px] opacity-100 py-4"
                    }`}
            >
                <ul className="flex flex-col gap-5 items-center text-lg border-black rounded-2xl py-2 mb-3 mx-auto w-[90%] bg-gradient-to-r from-slate-700 to-gray-900">
                    {MENUDATA.map(({ name, icon, link }, k) => (
                        <li key={k}>
                            <Link
                                to={link}
                                onClick={() => Setopen(true)}
                                className="flex gap-2 items-center text-white hover:text-gray-400 transition-all duration-200">
                                {icon}
                                <span>{name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Auth Buttons */}

                {log ?
                    <div className="text-center ">
                        <a href="/" className="text-black hover:text-gray-400 transition-all duration-200 w-full">
                            <button className="w-[90%] px-4 py-2 rounded-xl text-lg transition-all duration-300 ease-in-out hover:translate-y-[-3px] active:scale-[0.9] bg-white hover:bg-transparent outline-red-500/40 hover:shadow-xl hover:outline hover:outline-red-500 hover:shadow-red-500/30">Log Out</button>
                        </a>
                    </div> :
                    <div className="flex gap-3 flex-col pb-5 w-full items-center">
                        {Auth.map(({ name, link, css }, i) => (
                            <Link to={link} key={i} className="w-[90%]"
                                onClick={() => Setopen(true)}>
                                <button
                                    className={`w-full px-4 py-2 rounded-xl text-lg transition-all duration-300 ease-in-out hover:translate-y-[-3px] active:scale-[0.9] hover:bg-transparent outline-red-500/40 hover:shadow-xl hover:outline hover:outline-red-500 hover:shadow-red-500/30 ${css}`}>
                                    {name}
                                </button>
                            </Link>
                        ))} 
                    </div>
                }

            </div>
        </nav>
    );
}
