import React from 'react'
import CategoryItem from '../Components/HomepageMain/BigImg'
import Navbar from '../Components/HomepageMain/Navbar'
import HomeProducts from '../Components/HomepageMain/HomeProducts'
import Feed from '../Components/HomepageMain/Feed'
import Footer from '../Components/HomepageMain/Footer'
const Home = () => {
  return (
    <div> 
       <Navbar/>
        <CategoryItem/>
        <HomeProducts/>
        <Feed/>
        <hr style={{marginTop:"5%"}}/>
        <Footer/>
        </div>
  )
}

export default Home