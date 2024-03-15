import React from 'react';
import { GoClock } from "react-icons/go";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
const Recipe = () => {
    return (
        <div className='col-span-6'>
            <div className='grid grid-cols-10 gap-[24px]'>
                <div className='border p-[24px] rounded-[16px] col-span-5'>
                    <img className='w-full' src="https://i.ibb.co/vjD5CRM/Rectangle-20170.png" alt="" />
                    <div>
                        <h1 className='lexend font-semibold text-[20px] mt-[24px]'>Spaghetti Bolognese</h1>
                        <p className='text-[16px] text-[#878787] fira font-normal my-[16px]'>Classic Italian pasta dish with savory meat sauce.</p>
                    </div>
                    <hr />
                    <div>
                        <h1 className='lexend font-medium text-[18px] mt-[24px] mb-[16px]'>Ingredients: 6</h1>
                        <ol className='list-disc text-[#878787] fira text-[18px] font-normal mb-[16px] ml-5'>
                            <li>500g ground beef</li>
                            <li>1 onion, chopped</li>
                            <li>2 cloves garlic, minced</li>
                        </ol>
                    </div>
                    <hr />
                    <div className='flex justify-between items-center text-[16px] my-[24px]'>
                        <div className='flex items-center gap-[8px] text-[#535353]'>
                            <h3><GoClock /></h3>
                            <h3>30 minutes</h3>
                        </div>
                        <div className='flex items-center gap-[8px] text-[#535353]'>
                            <h3><MdOutlineLocalFireDepartment /></h3>
                            <h3>600 calories</h3>
                        </div>
                    </div>
                    <div>
                        <button className='lexend font-medium bg-[#0BE58A] text-[18px] px-[24px] py-[13px] rounded-[50px]'>Want to Cook</button>
                    </div>
                </div>
                <div className='border p-[24px] rounded-[16px] col-span-5'>
                    <img className='w-full' src="https://i.ibb.co/vjD5CRM/Rectangle-20170.png" alt="" />
                    <div>
                        <h1 className='lexend font-semibold text-[20px] mt-[24px]'>Spaghetti Bolognese</h1>
                        <p className='text-[16px] text-[#878787] fira font-normal my-[16px]'>Classic Italian pasta dish with savory meat sauce.</p>
                    </div>
                    <hr />
                    <div>
                        <h1 className='lexend font-medium text-[18px] mt-[24px] mb-[16px]'>Ingredients: 6</h1>
                        <ol className='list-disc text-[#878787] fira text-[18px] font-normal mb-[16px] ml-5'>
                            <li>500g ground beef</li>
                            <li>1 onion, chopped</li>
                            <li>2 cloves garlic, minced</li>
                        </ol>
                    </div>
                    <hr />
                    <div className='flex justify-between items-center text-[16px] my-[24px]'>
                        <div className='flex items-center gap-[8px] text-[#535353]'>
                            <h3><GoClock /></h3>
                            <h3>30 minutes</h3>
                        </div>
                        <div className='flex items-center gap-[8px] text-[#535353]'>
                            <h3><MdOutlineLocalFireDepartment /></h3>
                            <h3>600 calories</h3>
                        </div>
                    </div>
                    <div>
                        <button className='lexend font-medium bg-[#0BE58A] text-[18px] px-[24px] py-[13px] rounded-[50px]'>Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;