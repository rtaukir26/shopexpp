import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { addToCartProduct } from "../../store/action/fetchAllProductAction";
// import Navbar from "../navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";

const Products = ({ product }) => {
  // const history = useNavigate();
  const dispatch = useDispatch();

  // const addToCartOnclick = (addedProduct) => {
  //   dispatch(addToCartProduct(addedProduct));
  // };

  return (
    <>
      <div className="pr_details_container d-flex container py-3 mb-3">
        <div className="img_div m-1 p-1">
          <Link to={`product/${product.id}`}>
            <img src={product.image} alt="image" />
          </Link>
        </div>
        <div className="pr_details_div w-100 m-1 p-1">
          <h4>{product.title}</h4>
          <p>{product.description}</p>
          <h6>Price : {product.price}</h6>
          <div>
            <button
              className="btn btn-success m-1 "
              onClick={() => dispatch(addToCartProduct(product))}
            >
              Add to Cart
            </button>
            {/* <button className="btn  btn-info" onClick={()=>singleProductDetailsOnclick(product.id)} >Go to Cart</button> */}
            <Link to={`product/${product.id}`}>
              <button className="btn  btn-info m-1">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
