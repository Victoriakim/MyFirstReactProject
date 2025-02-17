import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
//I need to import useState because its a special hook from React that let's me manage states etc,
// I also need to import the lucide-react library to use the icons

const CounterApp = () => {
  const [count, setCount] = useState(0);
  //I'm using the useState hook, which can return a state variable and a setter function. 

  const increase = () => {
    setCount(count + 1);
  };
  //Creating a function that increases count by one when called.

  const decrease = () => {
    setCount(count - 1);
  };
  //Creating a function that decreases count by one when called.

  const reset = () => {
    setCount(0);
  };
  //Creating a function that resets count to 0 when called.

  const buttonClasses = "flex p-2 rounded-lg transition-colors hover:bg-opacity-50 bg-[#EEE7DD]";
  const monoFontClasses = "font-['IBM Plex Mono']"; 

  return (
    <div className="flex min-h-screen items-center flex-col gap-4 justify-center" style={{ backgroundColor: '#F9F5F2' }}>
      <p className={`${monoFontClasses} text-sm font-medium text-center`} style={{ width: "400px" }}>
        Hello, this is my first react app. It is a counter... in case you forget how to count or if you need to count more than the number of fingers you have.
      </p>

      <div className="flex flex-col gap-2">
        <div className="flex flex-direction items-center gap-2">
          <button 
            onClick={decrease}
            className={buttonClasses}
          >
            <Minus size={24} color='#593E21'/>
          </button>

          <span className={`${monoFontClasses} flex items-center justify-center text-sm text-center`} style={{ height: "40px", width: "40px" }}>
            {count}
          </span>

          <button 
            onClick={increase}
            className={buttonClasses}
          >
            <Plus size={24} color='#593E21'/>
          </button>
        </div>

        <button 
          onClick={reset}
          className={`${monoFontClasses} text-sm text-center transition-colors hover:bg-opacity-50`}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterApp;