import React from 'react';
import { IoIosSearch } from "react-icons/io";
const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 p-0 my-[50px]">
                <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 lexend font-normal text-[16px] text-[#5B546B]">
                    <li><a>Home</a></li>
                    <li><a>Recipes</a></li>
                    <li><a>About</a></li>
                    <li><a>Search</a></li>
                    <div className="flex items-center">
                        <div className='text-[28px] -mr-[45px] z-10'><IoIosSearch /></div>
                        <input type="text" placeholder="Search" className="input input-bordered md:w-auto pl-10 w-full ml-[17px]" />
                    </div>
                </ul>
                </div>
                <div>
                    <h1 className='font-bold text-[32px] lexend'>Recipe Calories</h1>
                </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 lexend font-normal text-[16px] text-[#5B546B]">
                <li><a>Home</a></li>
                <li><a>Recipes</a></li>
                <li><a>About</a></li>
                <li><a>Search</a></li>
                </ul>
                </div>
                
                <div className="navbar-end space-x-[16px]">
                    <div className="flex items-center">
                        <div className='text-[28px] -mr-[35px] z-10'><IoIosSearch /></div>
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto pl-10" />
                    </div>
                    <div>
                       <img className='h-[50px] w-[50px] rounded-full border-2 border-[#0BE58A]' src="https://i.ibb.co/QvYKM9N/dummy-profile.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="hero rounded-[24px] bg-cover bg-no-repeat" style={{backgroundImage: 'url(https://i.ibb.co/L8xcWfP/Rectangle-1.jpg)'}}>
                <div className="">
                    <div className="text-center">
                        <h1 className='lexend max-w-[897px] pt-[130px] font-bold text-[52px] text-[#FFFFFF]'>Discover an exceptional cooking class tailored for you!</h1>
                        <p className='lexend m-auto text-[18px] text-[#FFFFFF] max-w-[933px] mt-[24px] mb-[40px]'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                        <div className='pb-[130px] space-x-[24px]'>
                            <button className='font-semibold px-[30px] py-[20px] lexend text-[20px] text-[#150B2B] bg-[#0BE58A] border-2 border-[#0BE58A] rounded-[50px]'>Explore Now</button>
                            <button className='font-semibold px-[30px] py-[20px] lexend text-[20px] text-[#FFFFFF] bg-transparent border-2 border-[#FFFFFF] rounded-[50px]'>Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;