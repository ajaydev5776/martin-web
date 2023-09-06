import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../header/Header'
import Popup from '../popup/Popup'
import Footer from '../footer/Footer'
import Menu from '../menu/Menu'
import BookNow from '../bookNow/BookNow'
import Pointer from '../pointer/Pointer'

const Layout = ({Component}) => {
  const location = useLocation()
  const [dark, setDark] = useState(false)

  useEffect(()=> {
    if(location?.pathname === '/') {
      setDark(false)
    }else {
      setDark(true)
    }
  }, [location])
  return (
    <>
    <Header darkHeader={dark}/>
    <Popup darkPop={dark}/>
    <article data-scroll-container>
      {Component}
      <Footer/>
    </article>
    <Menu/>
    <BookNow/>
    <Pointer/>
    </>
  )
}

export default Layout