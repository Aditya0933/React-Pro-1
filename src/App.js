import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() { 
  const[count,setCount] = useState(0);
  function decreaseHandler(){
    setCount(count - 1);
  }
  function increaseHandler(){
    setCount(count + 1);
  }
  function resetHandler(){
    setCount(0);
  }
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151]'>
      <div className='flex items-center bg-[#233040] flex-col gap-10 py-10 px-10 border-4 rounded-sm ' >
        <div>
          <h1 className='text-[#0398d4] text-2xl font-medium'>Incerment & Decrement</h1>
        </div>
        <div className='bg-[white] flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]'>
          <button onClick={decreaseHandler} className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'>
            -
          </button>
          <div className='font-bold gap-12 text-5xl'>
            {count}
          </div>
          <button onClick={increaseHandler} className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl'>
            +
          </button>
        </div>
        <div>
          <button onClick={resetHandler} className='bg-[#0398d4] text-2xl text-[#fff] py-1.5 px-2 rounded-sm  '>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
