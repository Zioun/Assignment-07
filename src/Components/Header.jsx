import React from 'react';
import { IoIosSearch } from "react-icons/io";
const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
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