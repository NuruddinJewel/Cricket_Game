import React from 'react';
import coin from '../../assets/coin.png'
const Navbar = ({coins}) => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm container mx-auto">
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                    </button>
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <button className="flex justify-between items-center gap-2 font-bold text-xl">
                        <span>{coins} Coins</span>
                        <img src={coin} alt="" className='w-7 h-7' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;