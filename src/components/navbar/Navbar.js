import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar d-flex justify-content-between">
        <div className="ms-2">Shop Exp</div>
        <div className="me-2">
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
      </div>
    </>
  );
};

export default Navbar;
