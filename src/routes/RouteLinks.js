import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/homePage/Home'
import { HOME_URL , SERVICE_URL} from './routeConstants'
import Service from '../pages/servicePage/Service'
import Test from '../pages/test/Test'

import { useRef } from 'react'

const RouteLinks = () => {
  const ref = useRef(null)
  return (
    // <div data-scroll-container ref={ref}>
    <Routes>
      <Route path={HOME_URL} element={<Test/>}/>
      <Route path={SERVICE_URL} element={<Service/>}/>
    </Routes>
    // </div>
  )
}

export default RouteLinks