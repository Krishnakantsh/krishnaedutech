import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import CompanyStrip from '../CompanyStrip/CompanyStrip'
import AllCourse from '../OurCourse/AllCourse'
import TrendingCourse from '../TrendingCourse/TrendingCourse'
import Contacts from '../Contact/Contact'

function HomePage() {
  return (
    <div  className=' flex flex-col w-full h-full items-center justify-start ' >
       <HeroSection/>
       <CompanyStrip/>
       <TrendingCourse/>
       <AllCourse/>
       <Contacts/>
    </div>
  )
}

export default HomePage