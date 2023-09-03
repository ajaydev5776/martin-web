import React from 'react'
import Header from '../../myComponents/header/Header'
import Footer from '../../myComponents/footer/Footer'
import Menu from '../../myComponents/menu/Menu'
import { useState } from 'react'
import Guest from './Guest'
import Wellness from './Wellness'
import Party from './Party'
import Cnd from './Cnd'
import Gourment from './Gourment'
import Ethos from './Ethos'
import Contact from './Contact'
import Method from './Method'
import Cornice from './Cornice'
import About from './About'
import ProductCard from './ProductCard'
import Slider from './Slider'
import Sticky from './Sticky'





const Service = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
        <Header setShowMenu={setShowMenu}/>
        <Guest/>
        <Wellness/>
        <Party/>
        <Cnd/>
        <Gourment/>
        <Ethos/>
        <Method/>
        <Cornice/>
        <About/>
        <ProductCard/>
        <Slider/>
        <Contact/>
        <Sticky/>
    <Footer/>
    <Menu showMenu={showMenu} setShowMenu={setShowMenu}/>

    </>
  )
}

export default Service