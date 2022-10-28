import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Products from "../products/Products";

const Navbar = () => {
  const history = useNavigate();

  //navigatePage to AddTocart page
  const navigateOnclick = () => {
    history("/products");
    
    // getSelectedItems();
    // console.log(getSelectedItems)
  };
 

  return (
    <>
      <div className="navbar d-flex justify-content-between sticky-top">
        <Link to="/">
          <div className="ms-2">Shop Exp</div>
        </Link>
        <div className="navbar_list">
          <ul className="d-flex">
            <li className="mx-1">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-1">
              <Link to="/post">Post</Link>
            </li>
            <li className="mx-1">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        {/* <Link to="/products"> */}
        <div className="me-5 cursor-pointer" onClick={navigateOnclick}>
          <i className="fa-solid fa-cart-plus" style={{ fontSize: "28px" }}>
            <small>0</small>
          </i>
        </div>
        {/* <button onClick={()=>getSelectedItems(addedItems)}>AtCart</button> */}
        {/* </Link> */}
      </div>
    </>
  );
};

export default Navbar;
