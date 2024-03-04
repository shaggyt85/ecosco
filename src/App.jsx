import Navbar from './components/navbar/Navbar'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <main className='lg:h-[100vh]'>
      <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={''} />
    </Routes>
      </Router>
    </main>
  )
}

export default App
