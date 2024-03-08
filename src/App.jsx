import Navbar from './components/navbar/Navbar'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Rutas from './components/rutas/Rutas'
import './App.css'
import RutaRobert from './components/rutas/RutaRobert'
import TodaLaRuta from './components/rutas/TodaLaRuta'

function App() {
  return (
    <main className='lg:h-[100vh]'>
      <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={''} />
      <Route path='/katherine' element={<Rutas />} />
      <Route path='/Robert' element={<RutaRobert />} />
      <Route path='/todalaruta' element={<TodaLaRuta />} />
    </Routes>
      </Router>
    </main>
  )
}

export default App
