import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
// import ReactStars from "react-rating-stars-component";
import {
  addToCartProduct,
  cartProductDelete,
  productQtyDecreasing,
} from "../../store/action/fetchAllProductAction";
import Loader from "../Loader/Loader";
import Footer from "../../pages/footer/Footer";
import StarRating from "../starRating/StarRating";

const AddTocart = () => {
  const addedProductToCart = useSelector(
    (state) => state.getAllproductsReducer
  );
  // const history = useNavigate();
  const dispatch = useDispatch();
  // const paramId = useParams();
  console.log("addedProductToCart atoC Page", addedProductToCart);

  return (
    <>
      <Navbar />
      <div className="mt-5">
        {addedProductToCart.loading ? (
          <div>
            {/* {setTimeout(() => {
              console.log("you can see me after 2 seconds");
            }, 5000)} */}
            <Loader />
          </div>
        ) : (
          <div className="mt-5 mb-3">
            {addedProductToCart?.Added_to_cart?.length > 0 ? (
              <div>
                {addedProductToCart?.Added_to_cart?.map((product) => (
                  <div className="d-flex container border" key={product.id}>
                    <div className="img_div m-1 p-1">
                      <Link to={`/product/${product.id}`}>
                        <img src={product.image} alt="image" />
                      </Link>
                    </div>
                    <div className="pr_details_div w-100 m-1 p-1">
                      <h4>{product.title}</h4>
                      <p>{product.description}</p>
                      <StarRating value={product.rating.rate} />
                      <h6>
                        Quantity :
                        <i
                          className="fa-solid fa-minus  "
                          onClick={() =>
                            dispatch(productQtyDecreasing(product))
                          }
                        ></i>
                        {product.productQty}
                        <i
                          className="  fa-solid fa-plus"
                          onClick={() => dispatch(addToCartProduct(product))}
                        ></i>
                      </h6>
                      <h6>Price : {product.price * product.productQty} $</h6>
                      <button
                        className="btn btn-info"
                        onClick={() => dispatch(cartProductDelete(product.id))}
                      >
                        Buy Now
                      </button>

                      <Link to={`/product/${product.id}`}>
                        <button
                          className="btn  btn-info m-1"
                          // onClick={() => navigat(product.id)}
                        >
                          View Details
                        </button>
                      </Link>
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => dispatch(cartProductDelete(product.id))}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>Cart Not found</div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AddTocart;
