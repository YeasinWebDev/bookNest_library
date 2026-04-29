import Categories from '@/components/home/Categories'
import FeaturedBooks from '@/components/home/FeaturedBooks'
import HeroSection from '@/components/home/HeroSection'
import Newsletter from '@/components/home/Newsletter'
import Testimonials from '@/components/home/Testimonials'
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