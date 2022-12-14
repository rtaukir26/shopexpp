import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../images/xz10.png";
// import Products from "../products/Products";

const Navbar = () => {
  const [auth, setauth] = useState("second");
  // let auth;
  const productQty = useSelector((state) => state.getAllproductsReducer);
  const history = useNavigate();

  //logoutHandler
  const logoutHandler = () => {
    localStorage.removeItem("token");
    history("/login");
  };
  useEffect(() => {
    let token = localStorage.getItem("token");
    setauth(token);
    // auth = localStorage.getItem("user");
    // console.log(token)
  }, [auth]);

  return (
    <>
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
                <i
                  className="fa-solid fa-arrow-right-from-bracket"
                  title="logout"
                  onClick={logoutHandler}
                  style={{ color: "white" }}
                ></i>
              </li>
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
            </ul>
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
