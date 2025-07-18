import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./Components/Navbar/Navbar"
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact_us'
import Service from './Components/Services'
import Help from './Components/Help'
import Sign_in from './Components/Sign_in'
import Sign_up from './Components/Sign_up'
import Footer from './Components/Footer'
import Feedback from './Components/Feedback'



export default function 
() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact_us" element={<Contact />} />
        <Route path="/services" element={<Service />} />
        <Route path="/help" element={<Help />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/sign_in" element={<Sign_in />} />
        <Route path="/sign_up" element={<Sign_up />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}
