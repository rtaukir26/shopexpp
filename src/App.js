import React from "react";
import { BrowserRouter, Routes, route, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Post from "./pages/post/Post";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/post" element={<Post />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
