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
import Error from './pages/Error';
import ServiceTestimonial from './pages/ServiceTestimonial';

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
      <Route path="/services/add-testimonial" element={<ServiceTestimonial/>}></Route>
      <Route path="*" element={<Error></Error>}></Route>
    </Routes>
    <Scroll/>
    <Footer/>
    </>
  )
}

export default App
