import React, { useEffect, useState } from 'react';
import RecipeItem from './RecipeItem';
const Recipe = () => {
    const[recipe, setRecipe] = useState([]);
    useEffect(()=>{
        fetch("Recipe.json")
        .then(res => res.json())
        .then(data => setRecipe(data));
    },[])
    return (
        <div className='col-span-6'>
            <div className='grid grid-cols-10 gap-[24px]'>
                {
                    recipe.map((recipe, index)  => <RecipeItem index={index} recipe={recipe}></RecipeItem>)
                }
            </div>
        </div>
    );
};

export default Recipe;