import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
// import Products from "../products/Products";
import {
  addToCartProduct,
  cartProductDelete,
  productQtyDecreasing,
} from "../../store/action/fetchAllProductAction";

const AddTocart = () => {
  const addedProductToCart = useSelector(
    (state) => state.getAllproductsReducer
  );
  const dispatch = useDispatch();
  // const paramId = useParams();
  console.log("addedProductToCart atoC Page", addedProductToCart);

  return (
    <>
      <Navbar />
      <div className="mt-5">
        {addedProductToCart?.Added_to_cart?.length > 0 ? (
          <div>
            {addedProductToCart?.Added_to_cart?.map((product) => (
              <div className="d-flex container" key={product.id}>
                <div className="img_div m-1 p-1">
                  <Link to={`product/${product.id}`}>
                    <img src={product.image} alt="image" />
                  </Link>
                </div>
                <div className="pr_details_div w-100 m-1 p-1">
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>
                  <h6>
                    Quantity :
                    <i
                      className="fa-solid fa-minus bg-info "
                      onClick={() => dispatch(productQtyDecreasing(product))}
                    ></i>
                    {product.productQty}
                    <i
                      className=" bg-info fa-solid fa-plus"
                      onClick={() => dispatch(addToCartProduct(product))}
                    ></i>
                  </h6>
                  <h6>Price : {product.price}</h6>
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => dispatch(cartProductDelete(product.id))}
                  ></i>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Cart Not found</div>
        )}
      </div>
    </>
  );
};

export default AddTocart;
