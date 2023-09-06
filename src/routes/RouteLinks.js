import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HOME_URL , SERVICE_URL} from './routeConstants'
import Home from '../pages/home/Home'
import Service from '../pages/service/Index'
import Layout from '../components/layout/Layout'

const RouteLinks = () => {


  return (
    <>
   
    <Routes>
      <Route path={HOME_URL} element={<Layout Component={<Service/>}/>}/>
      <Route path='*' element={<Layout Component={<Service/>}/>}/>
      <Route path={SERVICE_URL} element={<Layout Component={<Service/>}/>}/>
    </Routes>
    </>
  )
}

export default RouteLinks