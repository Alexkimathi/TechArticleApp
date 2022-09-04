
import React from 'react'
import Home from './components/Home'


import AllArticles from './pages/AllArticles'
import NewArticles from './pages/NewArticles'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
    
  <Router>
       <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/allarticles" element={<AllArticles />} />
           <Route path="/newarticles" element={<NewArticles />} />
       </Routes>
  </Router>

  </div>

  )
}

export default App
