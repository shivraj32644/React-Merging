import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PaymentPage } from '../Pages/PaymentPage'

export const AllRoutes = () => {
  return (
      <div>
          <Routes>
              <Route path='/' element={<PaymentPage/>} ></Route>
      </Routes>
      </div>

  )
}
