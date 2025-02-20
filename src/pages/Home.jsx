import React from 'react'
import Hero from '../components/Hero'
import Aboutus from '../components/Aboutus'
import Course from '../components/Course'
import Instructor from '../components/Instructor'
import TestimonialCarousel from '../components/Testimonial'
import Detail from '../components/Detail'

const Home = () => {
  return (
    <div>
      <Hero />
        <Detail />
        <Aboutus />
        <Course />
        <Instructor />
        <TestimonialCarousel />
    </div>
  )
}

export default Home
