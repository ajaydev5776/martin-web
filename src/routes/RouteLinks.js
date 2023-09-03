import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/homePage/Home'
import { HOME_URL , SERVICE_URL} from './routeConstants'
import Service from '../pages/servicePage/Service'

const RouteLinks = () => {
  return (
    <Routes>
      <Route path={HOME_URL} element={<Home/>}/>
      <Route path={SERVICE_URL} element={<Service/>}/>
    </Routes>
  )
}

export default RouteLinks