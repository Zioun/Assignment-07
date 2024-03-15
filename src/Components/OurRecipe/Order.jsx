import React from 'react';

const Order = () => {
    return (
        <div className='col-span-4'>
            <div className='border rounded-[16px]'>
                <div>
                    <div className='flex justify-center'>
                        <h1 className='lexend px-[74px] pb-[16px] mt-[32px] mb-[16px] font-semibold text-[24px] text-center border-b'>Want to cook: 01</h1>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                            <tr className='fira font-medium text-[16px]'>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* row 1 */}
                            <tr className="bg-base-200 fira font-normal text-[16px] leading-6 text-[#676767]">
                                <th className='py-[20px]'>1</th>
                                <td>Chicken Caesar Salad</td>
                                <td>20 minutes</td>
                                <td>400 calories</td>
                                <td><button className='py-[9px] px-[18px] rounded-[50px] bg-[#0BE58A] lexend font-normal text-[16px] text-[#150B2B]'>Preparing</button></td>
                            </tr>
                            
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center'>
                        <h1 className='lexend px-[74px] pb-[16px] mt-[32px] mb-[16px] font-semibold text-[24px] text-center border-b'>Currently cooking: 02</h1>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                            <tr className='fira font-medium text-[16px]'>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* row 1 */}
                            <tr className="bg-base-200 fira font-normal text-[16px] leading-6 text-[#676767]">
                                <th className='py-[20px]'>1</th>
                                <td>Chicken Caesar Salad</td>
                                <td>20 minutes</td>
                                <td>400 calories</td>
                            </tr>
                            <tr className="bg-base-200 fira font-normal text-[16px] leading-6 text-[#676767]">
                                <th className='py-[20px]'>1</th>
                                <td>Chicken Caesar Salad</td>
                                <td>20 minutes</td>
                                <td>400 calories</td>
                            </tr>
                            </tbody>
                        </table>
                        <div className='flex justify-end lexend font-medium text-[16px] text-[#535353] mt-[16px] mb-[121px] gap-[20px] mr-[19px]'>
                            <h1 className='w-[101px]'>Total Time = 45 minutes</h1>
                            <h1 className='w-[127px]'>Total Calories = 1050 calories</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;