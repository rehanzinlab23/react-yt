import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Navbar2 from "./components/Navbar2";

const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      {/* Routing */}
      <Routes>
        {/* Use of Navigator */}
        <Route path="/" element={<Home />} />
        {/* Nested Routing */}
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>
        {/* Dynamic Routing */}
        <Route path="/course" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
