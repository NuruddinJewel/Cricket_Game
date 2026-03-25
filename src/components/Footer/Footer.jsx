import React from 'react';
import footer from '../../assets/logo-footer.png';

const Footer = () => {
    return (
        <div>
            {/* Newsletter Card */}
            <div className="container mx-auto px-4 py-10">
                <div className="rounded-2xl p-10 text-center"
                    style={{
                        background: 'linear-gradient(135deg, #e0f0ff 0%, #fff8e0 100%)',
                        border: '1px solid rgba(255,255,255,0.6)',
                    }}
                >
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                        Subscribe to our Newsletter
                    </h2>
                    <p className="text-gray-500 mb-6">
                        Get the latest updates and news right in your inbox!
                    </p>
                    <div className="flex justify-center gap-0 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-5 py-3 rounded-l-full border border-gray-300 outline-none text-gray-700 bg-white"
                        />
                        <button
                            className=" btn px-6 py-7 rounded-r-full font-bold text-white"
                            style={{ background: 'linear-gradient(135deg, #f97316, #eab308)' }}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-[#0a0f1e] text-white pt-10 pb-4">
                {/* Logo */}
                <div className="flex justify-center mb-10">
                    <img src={footer} alt="Cricket Logo" className="h-24 w-auto" />
                </div>

                {/* 3 Column Grid */}
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-gray-700">
                    {/* About Us */}
                    <div>
                        <h3 className="font-bold text-lg mb-3">About Us</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We are a passionate team dedicated to providing the best services to our customers.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-3">Quick Links</h3>
                        <ul className="text-gray-400 text-sm space-y-2">
                            {['Home', 'Services', 'About', 'Contact'].map(link => (
                                <li key={link} className="flex items-center gap-2 cursor-pointer hover:text-white">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full inline-block"></span>
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Subscribe */}
                    <div>
                        <h3 className="font-bold text-lg mb-2">Subscribe</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Subscribe to our newsletter for the latest updates.
                        </p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-1 py-2 rounded-l-lg bg-white text-gray-700 outline-none text-sm"
                            />
                            <button
                                className=" btn px-3 py-4 rounded-r-lg font-bold text-white text-sm"
                                style={{ background: 'linear-gradient(135deg, #f97316, #eab308)' }}
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-gray-500 text-sm pt-5">
                    &copy; {new Date().getFullYear()} All Rights Reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;