import './App.css'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Homepage from './pages/Homepage'
import Services from './pages/Services'
import ServiceDetails from './pages/ServiceDetails'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Scroll from './components/Scroll';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage></Homepage>}> </Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/services/:slug" element={<ServiceDetails/>}></Route>
    </Routes>
    <Scroll/>
    <Footer/>
    </>
  )
}

export default App
