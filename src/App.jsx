import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Stocks from './pages/Stocks'
import Currencies from './pages/Currencies'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Wallet from './pages/Wallet'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/stocks' element={<Stocks />} />
        <Route path='/currencies' element={<Currencies />} />
        <Route path='/wallet' element={<Wallet />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App