import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Services from './pages/Services'
import ServiceDetails from './pages/ServiceDetails'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  return (
    <>
    <Routes>
      <Route path="/"><Homepage/></Route>
      <Route path="/about"><About/></Route>
      <Route path="/contact"><Contact/></Route>
      <Route path="/services"><Services/></Route>
      <Route path=""><ServiceDetails/></Route>
    </Routes>
    </>
  )
}

export default App
