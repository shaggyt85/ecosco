import Navbar from './components/navbar/Navbar'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Rutas from './components/rutas/Rutas'
import './App.css'

function App() {
  return (
    <main className='lg:h-[100vh]'>
      <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={''} />
      <Route path='/katherine' element={<Rutas />} />
      <Route path='/Robert' element={<Rutas />} />
      <Route path='/todalaruta' element={<Rutas />} />
    </Routes>
      </Router>
    </main>
  )
}

export default App
