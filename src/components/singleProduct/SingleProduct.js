import axios from "axios";
import "./singleProduct.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../../pages/footer/Footer";
import Assertion from "../assertion/Assertion";
import StarRating from "../starRating/StarRating";
import ReactStars from "react-rating-stars-component";

// import "bootstrap/dist/css/bootstrap.css";

const SingleProduct = () => {
  const paramId = useParams();
  const [singleProduct, setSingleProducts] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [productQty, setProductQty] = useState(1);
  const [popup, setPopup] = useState(false);
  const [isAssertion, setIsAssertion] = useState(false);
  const [feedbackRating, setFeedbackRating] = useState([
    {
      rating: 4,
      feedback: "Good product",
    },
    {
      rating: 3.5,
      feedback: "Good quality ok very good condition",
    },
  ]);
  // console.log("singleProduct>>", singleProduct);
  // console.log(feedbackRating);

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    // activeColor: "tomato",
    activeColor: "#ffc107",
    size: window.innerWidth < 600 ? 20 : 21,
    // value: 4,
    // value: feedbackRating.rating,
    isHalf: true,
  };

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${paramId.id}`)
      .then((res) => {
        setSingleProducts({ ...res, productQty: 1 });
      })
      .catch((err) => setErrorMsg(err));
    setPopup(true);
    // console.log(feedbackRating);
  }, []);

  //DecreaseProductQty
  const DecreaseProductQty = () => {
    if (productQty > 1) {
      setProductQty(productQty - 1);
    }
  };
  //modal opening
  const show = () => {
    setIsAssertion(true);
  };

  return (
    <>
      <Navbar />
      <Assertion
        setIsAssertion={setIsAssertion}
        isAssertion={isAssertion}
        setPopup={setPopup}
        setFeedbackRating={setFeedbackRating}
      />
      <div className="mt-5 vh-100">
        {singleProduct?.data ? (
          <>
            <div className="d-flex container ">
              <div className="img_div m-1 p-1">
                <img src={singleProduct.data.image} alt="image" />
              </div>
              <div className="pr_details_div w-100 m-1 p-1 ">
                <h4>{singleProduct.data.title}</h4>
                <p>{singleProduct.data.description}</p>
                <div>
                  <span>
                    <StarRating value={singleProduct.data.rating.rate} />
                  </span>
                </div>
                <h6>Price : {singleProduct.data.price} $</h6>
                <h6>
                  Quantity :
                  <i
                    className="fa-solid fa-minus  "
                    onClick={DecreaseProductQty}
                  ></i>
                  {productQty}
                  <i
                    className=" fa-solid fa-plus"
                    onClick={() => setProductQty(productQty + 1)}
                  ></i>
                </h6>
                <button className="btn btn-info">Add to cart</button>
              </div>
            </div>
            {popup && (
              <div className="popup_div mt-5  ">
                <div className="">
                  <span className="cross_btn" onClick={() => setPopup(false)}>
                  <i className="fa-solid fa-xmark"></i>
                  {/* <FontAwesomeIcon icon="fa-solid fa-square-xmark" /> */}
                  </span>
                  <div className=" text-center">
                    <h5 className="">Do you like this product?</h5>
                  </div>
                  <div className="btn_yesNo_div mt-5 text-center">
                    <button
                      className="btn btn-info mx-2"
                      onClick={() => show()}
                    >
                      Yes
                    </button>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => show()}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            )}
            <div className="review_container container mt-4 p-3 d-flex">
              <h6>Reviews</h6>

              {feedbackRating.map((rate, index) => (
                <div key={index} className="review_div">
                  
                    <ReactStars
                      edit={false}
                      isHalf={true}
                      value={rate.rating}
                    />
                  
                  <p className="">{rate.feedback}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>No product found!</p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default SingleProduct;
