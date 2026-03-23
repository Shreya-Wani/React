import React from 'react'
import Card from './components/Cards'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Shreya Wani' age={19} img='https://images.unsplash.com/photo-1773947331776-1ddd78a95f58?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Shivam Patel' age={21} img='https://images.unsplash.com/photo-1643024658630-a2be4d0c4d37?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGQlMjBib3l8ZW58MHx8MHx8fDA%3D'/>
    </div>
  )
}

export default App
