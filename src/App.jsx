import './App.css'
import Header from './Components/Header';
import Order from './Components/OurRecipe/Order';
import Recipe from './Components/OurRecipe/Recipe';
function App() {
  return (
    <>
      <div className='max-w-[1320px] m-auto'>
        <Header></Header>
        <div className='m-auto text-center max-w-[823px] mt-[100px] mb-[50px]'>
          <h1 className='lexend font-semibold text-[40px]'>Our Recipes</h1>
          <p className='lexend text-[16px] font-normal'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
        </div>
        <div className='grid grid-cols-10 gap-[24px]'>
          <Recipe></Recipe>
          <Order></Order>
        </div>
      </div>
    </>
  )
}
export default App
