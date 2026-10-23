import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//...............
import Header from "./components/header";
import About from "./pages/about";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Booking from "./pages/booking";
import Testemonials from "./pages/testemonials";
import Products from "./pages/products";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="booking" element={<Booking />} />
          <Route path="testemonials" element={<Testemonials />} />
          <Route path="catalog" element={<Products />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}