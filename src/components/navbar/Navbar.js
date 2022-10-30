import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../images/xz10.png";
// import Products from "../products/Products";

const Navbar = () => {
  const productQty = useSelector((state) => state.getAllproductsReducer);
  // console.log("productQty navbar", productQty);
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
          <div className="logo_div ms-2 text-white ">
            <img src={logo} alt="logo" className="" />
            Shop Exp
          </div>
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
        <div
          className="me-5 cursor-pointer add_to_cart_div"
          onClick={navigateOnclick}
        >
          <i className="fa-solid fa-cart-plus " style={{ fontSize: "28px" }}>
            <small className="qty_span">
              {productQty.Added_to_cart.length}
            </small>
          </i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
