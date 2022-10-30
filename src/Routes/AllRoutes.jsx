import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProductPage } from '../Pages/ProductPage'

export const AllRoutes = () => {
  return (
      <div>
          <Routes>
              <Route path='/' element={<ProductPage/>} ></Route>
          </Routes>
    </div>
  )
}
