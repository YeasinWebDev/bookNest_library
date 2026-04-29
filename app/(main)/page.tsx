import Categories from '@/component/home/Categories'
import FeaturedBooks from '@/component/home/FeaturedBooks'
import HeroSection from '@/component/home/HeroSection'
import Newsletter from '@/component/home/Newsletter'
import Testimonials from '@/component/home/Testimonials'
import React from 'react'

function Home() {
  return (
    <main className="pt-20">
      <HeroSection />
      <FeaturedBooks />
      <Categories />
      <Testimonials />
      <Newsletter />
    </main>
  )
}

export default Home