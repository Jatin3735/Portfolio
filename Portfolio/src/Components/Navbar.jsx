import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { AiFillProduct } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";
import { MdContactMail } from "react-icons/md";

export default function Navbar() {
    const MENUDATA = [
        { name: 'Home', icons: <FaHome size={18} />, link: '/' },
        { name: 'Product', icons: <AiFillProduct size={18} />, link: '/product' },
        { name: 'About', icons: <FcAbout size={18} />, link: '/about' },
        { name: 'Contact Us', icons: <MdContactMail size={18} />, link: '/contact' },
        { name: 'FeedBack', icons: <VscFeedback size={18} />, link: '/freedback' },
    ];

    return (
        <nav className="flex justify-between items-center bg-gradient-to-r from-gray-700 to-gray-400 py-4 px-8 shadow-md">

            {/* Logo */}
            <a href=""><h1 className="text-2xl font-bold text-white hover:text-red-500 duration-300">MyBrand</h1></a>
            {/* Navigation Links */}
            <ul className="flex gap-6">
                {MENUDATA.map(({ name, icons, link }, k) => (
                    <li key={k}>
                        <a
                            href={link}
                            className="flex items-center gap-2 text-white font-medium hover:text-black transition-all duration-300"
                        >
                            {icons}
                            <span>{name}</span>
                        </a>
                    </li>
                ))}
            </ul>

            {/* Buttons */}
            <div className="flex gap-4">
                <button className="bg-white text-amber-500 px-4 py-2 rounded-lg font-semibold hover:bg-amber-100 transition duration-300 shadow">
                    Log In
                </button>
                <button className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition duration-300 shadow">
                    Sign Up
                </button>
            </div>
        </nav>
    );
}