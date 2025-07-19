import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { FaCircleUser } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { PiSignOutBold } from "react-icons/pi";




export default function ProfileDropDown() {

    const ProfileData = [
        { name: 'Your Profile', link: '/', icons: <FaCircleUser /> },
        { name: 'Setting', link: '/', icons: <IoSettingsSharp /> },
        { name: 'Sign Out', icons: <PiSignOutBold /> ,link:{}},
    ]

    return (
        <div>
            <Menu as="div" className="relative ml-3">
                <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800">

                        <img className="size-8 rounded-full" src="https://assets.gqindia.com/photos/6851031d0eae6262b75b95c4/16:9/w_2560%2Cc_limit/Money-Heist-actor-Alvaro-Morte-Berlin-2-The-Professor-cameo.jpg" />
                    </MenuButton>
                </div>
                <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                    {
                        ProfileData.map(({ name, link, icons }, index) => (
                            <MenuItem>
                                <Link
                                key={index}
                                    to={link}
                                    className=" px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden flex gap-5 items-center"
                                >
                                    {icons}
                                    <span>{name}</span>
                                </Link>
                            </MenuItem>
                        ))
                    }

                </MenuItems>
            </Menu>
        </div>
    )
}
