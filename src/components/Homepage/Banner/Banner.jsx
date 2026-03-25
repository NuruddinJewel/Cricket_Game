import React from 'react';
import bannerImg from '../../../assets/banner-main.png';
import bgShadow from '../../../assets/bg-shadow.png';

const Banner = () => {
    return (
        <div className="container mx-auto px-4 py-2">
            <div
                className='flex flex-col items-center justify-center text-center px-6 py-10 rounded-2xl'
                style={{
                    backgroundImage: `url(${bgShadow})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#0a0a0f',
                    boxShadow: '0 0 30px rgba(80, 120, 255, 0.2)',
                    minHeight: '55vh',
                }}
            >
                <img src={bannerImg} alt="Cricket" className='w-40 mb-3' />

                <h2 className='text-white text-xl md:text-2xl font-extrabold mb-2 max-w-2xl leading-tight'>
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h2>

                <p className='text-gray-400 text-sm md:text-base mb-6 tracking-wide'>
                    Beyond Boundaries Beyond Limits
                </p>

                <button
                    className='font-bold text-black px-8 py-2.5 rounded-lg text-sm tracking-wide transition-transform hover:scale-105'
                    style={{ background: '#c8f000', border: '2px solid #aacc00', boxShadow: '0 0 24px rgba(200,240,0,0.3)' }}
                >
                    Claim Free Credit
                </button>
            </div>
        </div>
    );
};

export default Banner;