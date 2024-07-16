import './assets/styles/app.scss'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import OptionsManager from './pages/OptionsManager'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

function App() {
  let [isNameVisible, setIsNameVisible] = useState(false);

  return (
    <>
      <div className="container">
          <Navbar isNameVisible={isNameVisible} />
          <div className="content">
            <Routes>
                <Route path='/' element={ <Home /> }></Route>
                <Route path="/manager" element={<OptionsManager />} />
            </Routes>
          </div>
          <Footer setIsNameVisible={setIsNameVisible} isNameVisible={isNameVisible} />
      </div>
    </>
  )
}

export default App
