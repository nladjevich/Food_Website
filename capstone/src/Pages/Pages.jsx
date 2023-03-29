import React from 'react'
import Home from './Home'
import { Route, Routes } from "react-router-dom"
import Searched from './Searched'
import RandDishes from './RandDishes'
import Info from './Info'
import Cuisines from './Cuisines'
import FilteredCuisine from './FilteredCuisine'
import SearchedIngredients from './SeachedIngredients'

function Pages() {
  return (

    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/searched/:search' element={<Searched/>}/>
        <Route path='/random/' element={<RandDishes></RandDishes>}></Route>
        <Route path='/info/:name' element={<Info></Info>}></Route>
        <Route path='/cuisines/' element={<Cuisines></Cuisines>}></Route>
        <Route path='/cuisines/filter/:type' element={<FilteredCuisine></FilteredCuisine>}></Route>
        <Route path='/ingredientsSearch/:search' element={<SearchedIngredients></SearchedIngredients>}></Route>
    </Routes>

  )
}

export default Pages
