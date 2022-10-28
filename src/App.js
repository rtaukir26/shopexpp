import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import AddTocart from "./components/addToCart/AddTocart";
import Navbar from "./components/navbar/Navbar";
import SingleProduct from "./components/singleProduct/SingleProduct";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Page404 from "./pages/page404/Page404";
import Post from "./pages/post/Post";
import { store } from "./store/store";
// import { Provider } from "react";

function App() {
  return (
    <>
    <Provider store={store}>

      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/post" element={<Post />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/product/:id" element={<SingleProduct />} />
          <Route exact path="/products" element={<AddTocart />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
