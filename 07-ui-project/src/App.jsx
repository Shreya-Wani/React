import React from 'react'
import Section1 from './components/Section1/Section1'

const App = () => {

  const users = [
    {
      img:'https://images.unsplash.com/photo-1588696191779-61dde1b83475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0MDUwMjU1fHxlbnwwfHx8fHw%3D',
      intro:'',
      color:'bg-pink-500',
      tag:'Satisfied'},
    {
      img:'https://images.unsplash.com/photo-1502914552753-4557f2418b43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw0MDUwMjU1fHxlbnwwfHx8fHw%3D',
      intro:'', 
      color:'bg-purple-600',
      tag:'underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1584721639492-b7635de6c508?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mzl8NDA1MDI1NXx8ZW58MHx8fHx8', 
      intro:'',
      color:'bg-orange-400', 
      tag:'unwatched'
    },
    {
      img:'https://images.unsplash.com/photo-1536012283419-09392f86fb35?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8MTk3MzEyNXx8ZW58MHx8fHx8', 
      intro:'', 
      color:'bg-red-400',
      tag:'cuties'
    }
  ]

  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App
