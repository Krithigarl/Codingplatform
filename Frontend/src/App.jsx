import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './index.css'
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Auth from './Pages/Auth';
import Dashborad from './Pages/Dashborad';
const App = () => {
  return (
    <div>
     {/* <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Auth/>}/>
     </Routes>
     </BrowserRouter> */}
     <Dashborad/>
    </div>
  )
}

export default App