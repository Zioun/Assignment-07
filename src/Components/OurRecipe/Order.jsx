import React, { useEffect, useState } from 'react';
import WtCook from './WtCook';
import Preparing from './Preparing';

const Order = ({recipe, removeItem}) => {
    const [recipes, setRecipe] = useState([]);
    const [time, setTime] = useState(0);
    const [calories, setCalories] = useState(0);
    const preparing = (recipe) =>{
        const newRecipe = [...recipes, recipe];
        setRecipe(newRecipe);
        const addTime = Number(time) + Number(recipe.preparing_time);
        setTime(addTime);
        const addCalories = Number(calories) + Number(recipe.calories);
        setCalories(addCalories);
    }
    return (
        <div className='col-span-4'>
            <div className='border rounded-[16px]'>
                <div>
                    <div className='flex justify-center'>
                        <h1 className='lexend px-[74px] pb-[16px] mt-[32px] mb-[16px] font-semibold text-[24px] text-center border-b'>Want to cook: {recipe.length}</h1>
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
                            {
                                recipe.map((recipe,index)=><WtCook preparing ={preparing} index={index} removeItem={removeItem} recipe = {recipe}></WtCook>)
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center'>
                        <h1 className='lexend px-[74px] pb-[16px] mt-[32px] mb-[16px] font-semibold text-[24px] text-center border-b'>Currently cooking: {recipes.length}</h1>
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
                            {
                                recipes.map((recipes,index)=><Preparing index={index} recipes={recipes}></Preparing>)
                            }
                            </tbody>
                        </table>
                        <div className='flex justify-end lexend font-medium text-[16px] text-[#535353] mt-[16px] mb-[121px] gap-[20px] mr-[19px]'>
                            <h1 className='w-[101px]'>Total Time = {time} minutes</h1>
                            <h1 className='w-[127px]'>Total Calories = {calories} calories</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;