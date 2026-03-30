import React from 'react'

const App = () => {

  //clear the local and session storage
  localStorage.clear();
  sessionStorage.clear();


  // setItem, getItem, removeItem
  localStorage.setItem('name', 'John Doe')
  localStorage.setItem('age', '30')

  const name = localStorage.getItem('name')
  const age = localStorage.getItem('age')

  console.log(name, age)

  localStorage.removeItem('name')
  localStorage.removeItem('age')



  // store the user data in local storage
  const user = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
  }

  localStorage.setItem('user', JSON.stringify(user))


  // get the user data from local storage
  const userData = JSON.parse(localStorage.getItem('user'))
  console.log(userData);


  return (
    <div>
      app
    </div>
  )
}

export default App
