import React, { useState } from 'react';
import coin from '../../assets/coin.png';
import logo from '../../assets/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = ({ coins }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="container mx-auto px-4">
            <div className="navbar bg-base-100 shadow-sm flex items-center justify-between py-2">

                {/* Logo */}
                <div className="flex-1">
                    <img src={logo} alt="Logo" className="h-10 w-auto" />
                </div>

                {/* Nav Links - Desktop */}
                <div className="hidden md:flex flex-none">
                    <ul className="flex gap-6 font-medium text-base items-center">
                        <li className="cursor-pointer hover:text-primary">Home</li>
                        <li className="cursor-pointer hover:text-primary">Fixture</li>
                        <li className="cursor-pointer hover:text-primary">Teams</li>
                        <li className="cursor-pointer hover:text-primary">Schedules</li>
                    </ul>
                </div>

                {/* Coins */}
                <div className="flex-none ml-6">
                    <button className="flex items-center gap-2 font-semibold text-base border border-gray-300 rounded-full px-4 py-1.5">
                        <span>{coins} Coin</span>
                        <img src={coin} alt="Coin" className="w-5 h-5" />
                    </button>
                </div>

                {/* Hamburger - Mobile */}
                <div className="md:hidden ml-4">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
                        {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden bg-base-100 shadow-md rounded-lg px-6 py-4 mb-2">
                    <ul className="flex flex-col gap-4 font-medium text-base">
                        <li className="cursor-pointer hover:text-primary" onClick={() => setMenuOpen(false)}>Home</li>
                        <li className="cursor-pointer hover:text-primary" onClick={() => setMenuOpen(false)}>Fixture</li>
                        <li className="cursor-pointer hover:text-primary" onClick={() => setMenuOpen(false)}>Teams</li>
                        <li className="cursor-pointer hover:text-primary" onClick={() => setMenuOpen(false)}>Schedules</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;