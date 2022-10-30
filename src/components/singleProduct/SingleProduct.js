import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";
import {
  addToCartProduct,
  productQtyDecreasing,
} from "../../store/action/fetchAllProductAction";
import Footer from "../../pages/footer/Footer";
// import { fetchAllProductsData } from "../../store/action/fetchAllProductAction";

const SingleProduct = () => {
  const paramId = useParams();
  const [singleProduct, setSingleProducts] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [productQty, setProductQty] = useState(1);
  // const dispatch = useDispatch();
  // const singleProductQty = useSelector((state) => state);
  // console.log("singleProductQty", singleProductQty);
  console.log("singleProduct>>", singleProduct);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${paramId.id}`)
      .then((res) => {
        setSingleProducts({ ...res, productQty: 1 });
      })
      .catch((err) => setErrorMsg(err));
    // dispatch(fetchAllProductsData())
  }, []);
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    // activeColor: "tomato",
    // value: 3.5,
    activeColor: "#ffc107",
    size: window.innerWidth < 600 ? 20 : 25,
    isHalf: true,
  };
  //DecreaseProductQty
  const DecreaseProductQty = () => {
    if (productQty > 1) {
      setProductQty(productQty - 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="mt-5 vh-100">
        {singleProduct?.data ? (
          <div className="d-flex container">
            <div className="img_div m-1 p-1">
              <img src={singleProduct.data.image} alt="image" />
            </div>
            <div className="pr_details_div w-100 m-1 p-1">
              <h4>{singleProduct.data.title}</h4>
              <p>{singleProduct.data.description}</p>
              <div>
                <span>
                  <ReactStars
                    {...options}
                    value={singleProduct.data.rating.rate}
                  />
                </span>
              </div>
              <h6>Price : {singleProduct.data.price} $</h6>
              <h6>
                Quantity :
                <i
                  className="fa-solid fa-minus bg-info "
                  onClick={DecreaseProductQty}
                ></i>
                {productQty}
                <i
                  className=" bg-info fa-solid fa-plus"
                  onClick={() => setProductQty(productQty + 1)}
                ></i>
              </h6>
              <button className="btn btn-info">Add to cart</button>
            </div>
          </div>
        ) : (
          <p>No product found!</p>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default SingleProduct;
