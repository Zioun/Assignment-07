import React from 'react';

const Preparing = ({index, recipes}) => {
    const i = index + 1;
    return (
        <>
            <tr className="bg-base-200 fira font-normal text-[16px] leading-6 text-[#676767]">
                <th className='py-[20px]'>{i}</th>
                <td>{recipes.recipe_name}</td>
                <td>{recipes.preparing_time} minutes</td>
                <td>{recipes.calories} calories</td>
            </tr>   
        </>
    );
};

export default Preparing;