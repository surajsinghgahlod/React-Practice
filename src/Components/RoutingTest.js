import React from 'react'
import {BrowserRouter , Routes, Route, Link} from 'react-router-dom'
import Home from './RoutingTestPages/Home'
import Contact from './RoutingTestPages/Contact'
import About from './RoutingTestPages/About'

const RoutingTest = () => {
  return (
    <div>
    <BrowserRouter>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/About'>About</Link>
                </li>
                <li>
                    <Link to='/Contact'>Contact</Link>
                </li>
            </ul>
        </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RoutingTest
