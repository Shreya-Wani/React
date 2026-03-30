import React, { useState } from 'react'

//updating state in object by copy the old state and then update the new state by using spread operator
// const App = () => {

//   const [num, setNum] = useState({user:"Shreya", age:20})

//   const btnClicked = () => {
//     const newNum = {...num};
//     newNum.user='shivam'
//     newNum.age=21
//     setNum(newNum);
//     console.log(newNum);
//   }
//   return (
//     <div>
//       <h1>{num.user}, {num.age}</h1>
//       <button onClick={btnClicked}>click</button>
//     </div>
//   )
// }

//updating state in array by copy the old state and then update the new state by using spread operator
// const App = () => {

//   const [num, setNum] = useState([10,20,30])

//   const btnClicked = () => {
//     const newNum = [...num];
//     newNum.push(40);
//     setNum(newNum);
//     console.log(newNum);
//   }

//   return (
//     <div>
//       <h1>{num[0]}</h1>
//       <button onClick={btnClicked}>click</button>
//     </div>
//   )
// }

//Batch update of state in react, when we update the state multiple times in a single function, react will batch those updates together and only re-render the component once. This is done for performance reasons, to avoid unnecessary re-renders. In the example below, we are updating the state three times in a single function, but react will only re-render the component once after all the updates are done.
const App = () => {

  const [num, setNum] = useState(10)

  const btnClicked = () => {
    setNum(prev => (prev + 1));
    setNum(prev => (prev + 1));
    setNum(prev => (prev + 1));
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}
export default App
