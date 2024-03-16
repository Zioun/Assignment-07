import { useState } from 'react';
import './App.css'
import Header from './Components/Header';
import Order from './Components/OurRecipe/Order';
import Recipe from './Components/OurRecipe/Recipe';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [recipes, setRecipes] = useState([]);

  const wantToCook = (recipe) => {
    const existingRecipe = recipes.find(r => r === recipe);
    if (!existingRecipe) {
      setRecipes(prevRecipes => [...prevRecipes, recipe]);
    } else {
      toast("Recipe already exists!");
    }
  };

  return (
    <>
      <div className='max-w-[1320px] m-auto'>
      <div>
        <ToastContainer />
      </div>
        <Header></Header>
        <div className='m-auto text-center max-w-[823px] mt-[100px] mb-[50px]'>
          <h1 className='lexend font-semibold text-[40px]'>Our Recipes</h1>
          <p className='lexend text-[16px] font-normal'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
        </div>
        <div className='grid grid-cols-10 gap-[24px]'>
          <Recipe wantToCook={wantToCook}></Recipe>
          <Order key={recipes.recipe_id} recipe={recipes}></Order>
        </div>
      </div>
    </>
  )
}
export default App
