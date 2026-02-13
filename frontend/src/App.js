import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StickyBottomBar from "./components/StickyBottomBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import BulkOrders from "./pages/BulkOrders";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="pb-20 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/bulk-orders" element={<BulkOrders />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <StickyBottomBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
