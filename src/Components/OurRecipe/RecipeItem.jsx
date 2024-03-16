import React from 'react';
import { GoClock } from "react-icons/go";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
const RecipeItem = ({recipe,wantToCook}) => {
    const {recipe_id, recipe_name, recipe_image, short_description, ingredients, preparing_time, calories} = recipe;
    return (
        <div className='border p-[24px] rounded-[16px] col-span-5'>
                <img className='w-full h-[200px] rounded-[16px]' src={recipe_image} alt="" />
                <div>
                    <h1 className='lexend font-semibold text-[20px] mt-[24px]'>{recipe_name}</h1>
                    <p className='text-[16px] text-[#878787] fira font-normal my-[16px]'>{short_description}</p>
                </div>
                <hr />
                <div>
                    <h1 className='lexend font-medium text-[18px] mt-[24px] mb-[16px]'>Ingredients: {ingredients.length}</h1>
                    <ol className='list-disc text-[#878787] fira text-[18px] font-normal mb-[16px] ml-5'>
                        {
                           ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ol>
                </div>
                <hr />
                <div className='flex justify-between items-center text-[16px] my-[24px]'>
                    <div className='flex items-center gap-[8px] text-[#535353]'>
                        <h3><GoClock /></h3>
                        <h3>{preparing_time} minutes</h3>
                    </div>
                    <div className='flex items-center gap-[8px] text-[#535353]'>
                        <h3><MdOutlineLocalFireDepartment /></h3>
                        <h3>{calories} calories</h3>
                    </div>
                </div>
                <div>
                    <button onClick={()=>wantToCook(recipe)} className='lexend font-medium bg-[#0BE58A] text-[18px] px-[24px] py-[13px] rounded-[50px]'>Want to Cook</button>
                </div>
        </div>
    );
};

export default RecipeItem;