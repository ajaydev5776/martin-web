import React, {useState} from 'react'
import TasteMakers from '../../myComponents/tasteMakers/TasteMakers'
import Ethos from '../../myComponents/ethos/Ethos'
import Count from '../../myComponents/count/Count'
import HeroSection from '../../myComponents/heroSection/HeroSection'
import Gourment from '../../myComponents/gourement/Gourment'
import Header from './../../myComponents/header/Header'
import Accordian from '../../myComponents/accordian/Accordian'
import Footer from './../../myComponents/footer/Footer'
import Menu from './../../myComponents/menu/Menu'


const Home = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
    <Header setShowMenu={setShowMenu}/>
      <HeroSection/>
      {/* <TasteMakers/> */}
      <Ethos/>
      {/* <MouseMoveEffect/> */}
      <Count/>
      <Gourment/>
      <Accordian/>
      <Footer/>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu}/>
    </>
  )
}

export default Home