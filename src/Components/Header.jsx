import React from 'react';
import { IoIosSearch } from "react-icons/io";
const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 py-5 md:my-[54px]">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 lexend font-normal text-[16px] text-[#5B546B]">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                        <div>
                        <input className='border w-full h-[48px] rounded-[50px] pl-5 text-[16px] bg-[#F3F3F4]' type="text" placeholder='Search'/>
                        </div>
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl lexend font-bold md:text-[32px]">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 lexend font-normal text-[16px] text-[#5B546B]">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end relative">
                    <input className='border max-w-[260px] h-[48px] rounded-[50px] text-[16px] bg-[#F3F3F4] pl-[56px] hidden md:block' type="text" placeholder='Search'/>
                    <button className='absolute mr-[260px] text-[25px] hidden md:block'><IoIosSearch /></button>
                    <div>
                        <img className='h-[50px] border-2 rounded-full border-[#130A25] ml-[16px]' src="https://i.ibb.co/cxc7CFX/103160-man-512x512.png" alt="" />
                    </div>
                </div>
            </div>
            
            <div className="hero rounded-[24px] bg-cover bg-no-repeat" style={{backgroundImage: 'url(https://i.ibb.co/L8xcWfP/Rectangle-1.jpg)'}}>
                <div className="p-5">
                    <div className="text-center">
                        <h1 className='lexend max-w-[897px] pt-10 md:pt-[130px] font-bold text-[37px] md:text-[52px] text-[#FFFFFF]'>Discover an exceptional cooking class tailored for you!</h1>
                        <p className='lexend m-auto text-[16px] md:text-[18px] text-[#FFFFFF] max-w-[933px] mt-[24px] mb-[40px]'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                        <div className='pb-10 md:pb-[130px] flex flex-col justify-center items-center gap-5 text-center md:flex-row'>
                            <button className='font-semibold w-[170px] h-[60px] md:w-[187px] md:h-[65px] lexend md:text-[20px] text-[#150B2B] bg-[#0BE58A] border-2 border-[#0BE58A] rounded-[50px]'>Explore Now</button>
                            <button className='font-semibold w-[170px] h-[60px] md:w-[201px] md:h-[65px] lexend md:text-[20px] text-[#FFFFFF] bg-transparent border-2 border-[#FFFFFF] rounded-[50px]'>Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;