import React from 'react'
import TasteMakers from '../../myComponents/tasteMakers/TasteMakers'
import Ethos from '../../myComponents/ethos/Ethos'
import Count from '../../myComponents/count/Count'
import HeroSection from '../../myComponents/heroSection/HeroSection'
import Gourment from '../../myComponents/gourement/Gourment'
import Header from './../../myComponents/header/Header'
import Accordian from '../../myComponents/accordian/Accordian'

const Home = () => {
  return (
    <>
    <Header/>
      {/* <HeroSection/> */}
      <TasteMakers/>
      <Ethos/>
      {/* <MouseMoveEffect/> */}
      <Count/>
      <Gourment/>
      <Accordian/>
    </>
  )
}

export default Home