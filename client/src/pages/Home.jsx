import React from 'react'
import Hero from '../components/Hero'
import FeaturedSection from '../components/FeaturedSection'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <FeaturedSection></FeaturedSection>
      <Banner></Banner>
      <Testimonial></Testimonial>
      <NewsLetter></NewsLetter>
    </>
  )
}

export default Home
