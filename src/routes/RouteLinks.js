import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/homePage/Home'
import { HOME_URL } from './routeConstants'

const RouteLinks = () => {
  return (
    <Routes>
      <Route path={HOME_URL} element={<Home/>}/>
    </Routes>
  )
}

export default RouteLinks