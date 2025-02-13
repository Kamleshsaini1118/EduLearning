import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Detail from './components/Detail'
import Aboutus from './components/Aboutus'
import Course from './components/Course'
import Instructor from './components/Instructor'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Hero />
      <Detail />
      <Aboutus />
      <Course />
      <Instructor />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
