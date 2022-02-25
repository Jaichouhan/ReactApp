import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Details from './Components/DetailsPage/Details'
import Home from './Components/HomePage/Home'
import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "react-scroll-to-top";
const App = () => {
  return (
   <>
   <ScrollToTop smooth />
     <Navbar />
   <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/Details" element={<Details />}></Route>
   </Routes>
   <Footer />
   </>
  )
}

export default App