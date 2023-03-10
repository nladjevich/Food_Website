import React from 'react'
import Home from './Home'
import { Route, Routes } from "react-router-dom"
import Searched from './Searched'
import RandDishes from './RandDishes'

function Pages() {
  return (

    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/searched/:search' element={<Searched/>}/>
        <Route path='/random/' element={<RandDishes></RandDishes>}></Route>
    </Routes>

  )
}

export default Pages
