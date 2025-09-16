import react from 'react'
import Home from './component/Home'
import Navbar from './component/Navbar'
import Shop from './component/Shop'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Productid from './component/Productid'

function App() {

  return (
    <>
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route>
            <Route path="/" element={<Home />}/> 
            <Route path="/shop" element={<Shop/>}/>
            <Route path='/productid/:id/:category' element={<Productid/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
