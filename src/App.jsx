import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Questionario1 from './components/Questionario/Questionario1'
import Questionario2 from './components/Questionario/Questionario2'
import Questionario3 from './components/Questionario/Questionario3'

export default function App() {
  return (
        <Router>
          <Routes>
             <Route path="/" element={<Questionario1/>}/>
             <Route path="/questionario2" element={<Questionario2/>}/>
             <Route path="/questionario3" element={<Questionario3/>}/>
          </Routes>
        </Router>
  )
}
