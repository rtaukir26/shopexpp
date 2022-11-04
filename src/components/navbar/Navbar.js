import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../images/xz10.png";
// import Products from "../products/Products";

const Navbar = () => {
  let token;
  const productQty = useSelector((state) => state.getAllproductsReducer);
  // console.log("productQty navbar", productQty);
  const history = useNavigate();

  //logoutHandler
  const logoutHandler = () => {
    localStorage.removeItem("token");
    history("/login");
  };
  useEffect(() => {
    token = localStorage.getItem("token");
    // console.log(token)
  }, []);

  return (
    <>
      {/* <div className="navbar d-flex justify-content-between sticky-top"> */}
      <div className="navbar sticky-top">
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
        <div className="LoginSingup_container ">
          <div className="LoginSingup_div ">
            <ul>
              <li>
                <Link to="/profile">
                  <i
                    className="fa-solid fa-user-tie"
                    title="profile"
                    style={{ color: "rgb(69 156 234)", fontSize: "22px" }}
                  ></i>
                </Link>
              </li>
              <li>
                {/* <Link to="/login"> */}
                <i
                  className="fa-solid fa-arrow-right-from-bracket"
                  title="logout"
                  onClick={logoutHandler}
                  style={{color:"white"}}
                ></i>
                {/* </Link> */}
              </li>
              <li>
                <Link to="/">Sign up</Link>
              </li>
            </ul>
            {/* <Link to="/">
              <div className="logo_div text-white ">Sign up</div>
            </Link> */}
          </div>

          <div
            className=" cursor-pointer add_to_cart_div"
            onClick={() => history("/products")}
          >
            <i className="fa-solid fa-cart-plus " style={{ fontSize: "28px" }}>
              <small className="qty_span">
                {productQty.Added_to_cart.length}
              </small>
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
