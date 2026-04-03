import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Kids from './pages/Kids'
import Men from './pages/Men'
import Women from './pages/Women'


const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/about' element={<About />} />

        <Route path='/product' element={<Product />} >
          <Route path='kids' element={<Kids />} />
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
        </Route>

        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:courseId' element={<CourseDetail />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
