import React from 'react';

const WtCook = ({ index, recipe, preparing ,removeItem}) => {
    const i = index + 1;
    return (
        <>
            <tr className="bg-base-200 fira font-normal text-[16px] leading-6 text-[#676767]">
                <th className='py-[20px]'>{i}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time} minutes</td>
                <td>{recipe.calories} calories</td>
                <td><button onClick={() => { preparing(recipe); removeItem(recipe); }} className='py-[9px] px-[18px] rounded-[50px] bg-[#0BE58A] lexend font-normal text-[16px] text-[#150B2B]'>Preparing</button></td>                                 
            </tr>
        </>
    );
};

export default WtCook;