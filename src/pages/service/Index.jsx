import React from 'react'
import ServiceHero from '../../components/serviceHero/ServiceHero'
import ServiceDetail from '../../components/serviceDetail/ServiceDetail'
import NailService from '../../components/nailService/NailService'
import Combine from '../../components/combine/Combine'
import Gallery from '../../components/gallery/Gallery'
import Booking from '../../components/booking/Booking'
import MoreGuest from '../../components/moreGuest/MoreGuest'
import './style.css'

const Service = () => {
  return (
    <>
	<ServiceHero/>
	<ServiceDetail/>
	<NailService/>
	<Combine/>
	<Gallery/>
	<Booking/>
	<MoreGuest/>
    </>
  )
}

export default Service