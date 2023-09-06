import React from 'react'






import Header from '../../components/header/Header'
import Popup from '../../components/popup/Popup'
import HeroSection from '../../components/heroSection/HeroSection'
import Intro from '../../components/intro/Intro'
import Ethos from '../../components/ethos/Ethos'
import HorizontalSlider from '../../components/horizontalSlider/HorizontalSlider'
import Gourmet from '../../components/gourmet/Gourmet'
import Accordian from '../../components/accordian/Accordian'
import Footer from '../../components/footer/Footer'
import Menu from '../../components/menu/Menu'
import BookNow from '../../components/bookNow/BookNow'
import Pointer from '../../components/pointer/Pointer'




const Home = () => {
  return (
    <>
  {/* <Header/> */}
	{/* <Popup/> */}
	{/* <article data-scroll-container> */}
		<HeroSection/>
		<Intro/>
		<Ethos/>
		<HorizontalSlider/>
		<Gourmet/>
		<Accordian/>
		{/* <Footer/> */}
	{/* </article> */}
	{/* <Menu/> */}
	{/* <BookNow/> */}
	{/* <Pointer/> */}


    </>
  )
}

export default Home