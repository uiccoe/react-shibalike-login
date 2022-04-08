import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login'

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Home />}/> */}
        <Route path="/login" element ={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App