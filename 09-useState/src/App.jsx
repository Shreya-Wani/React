import React from 'react'
import { useState } from 'react'

const App = () => {

  // let a = 10;

  // function increment() {
  //   console.log(a);
  //   a++;
  //   console.log(a);
  // }

  // return (
  //   <div>
  //     <h1>Value of a: {a}</h1>
  //     <button onClick={increment}>Increment</button>
  //   </div>
  // )

  const [num, setNum] = useState(10);

  function increment() {
    setNum(num + 1);
  }

  function decrement() {
    setNum(num - 1);
  }

  function incrementBy5() {
    setNum(num + 5);
  }

  return (
    <div className='outer'>
      <h1 className='box'>{num}</h1>
      <div className='btn-container'>
        <button className='btn1' onClick={increment}>Increment</button>
        <button className='btn2' onClick={decrement}>Decrement</button>
        <button className='btn3' onClick={incrementBy5}>Increment by 5</button>
      </div>
    </div>
  )

}

export default App
