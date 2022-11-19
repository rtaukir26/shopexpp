import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import AddTocart from "./components/addToCart/AddTocart";
// import Navbar from "./componnents/navbar/Navbar";
import SingleProduct from "./components/singleProduct/SingleProduct";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Page404 from "./pages/page404/Page404";
import Post from "./pages/post/Post";
import { store } from "./store/store";
import Login from "./pages/login/Login";
import { useEffect } from "react";
import Profile from "./pages/profile/Profile";
import SignUp from "./pages/signup/SignUp";
import PrivateRoute from "./components/privateComp/PrivateComponent";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/post" element={<Post />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/product/:id" element={<SingleProduct />} />
              <Route exact path="/products" element={<AddTocart />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route path="*" element={<Page404 />} />
            </Route>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
