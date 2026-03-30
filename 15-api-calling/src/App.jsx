import axios from 'axios'
import { useState } from 'react'

// const App = () => {

//   //using fetch to get data from an API

//   async function getData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(response);
//   }

//   const getData = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')

//     //console.log(response.json()); // this will return a promise, we need to await it to get the actual data bcoz json method is also asynchronous
//     const data = await response.json()
//     console.log(data);  
//   }

//   return (
//     <div>
//       <button onClick={getData}>Get Data</button>
//     </div>
//   )
// }

// export default App


const App = () => {

  const [data, setData] = useState([])

  const getData = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    setData(data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem, idx){
          return <h3>Hello, {elem.name} {idx}</h3>
        })}
      </div>

    </div>
  )
}

export default App
