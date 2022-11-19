import React from "react";
import './products.css';
import { Link } from "react-router-dom";
import { addToCartProduct } from "../../store/action/fetchAllProductAction";
// import Navbar from "../navbar/Navbar";
import { useDispatch } from "react-redux";
// import ReactStars from "react-rating-stars-component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StarRating from "../starRating/StarRating";

const Products = ({ product }) => {
  // const history = useNavigate();
  const dispatch = useDispatch();

  const additemsToCart = (product) => {
    toast.success("Product Added Successfully !", {
      position: toast.POSITION.TOP_RIGHT,
      // className: "toast-message",
    });
    // toast.configure();
    dispatch(addToCartProduct(product));
  };
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    // activeColor: "tomato",
    activeColor: "#ffc107",
    size: window.innerWidth < 600 ? 20 : 25,
    // value: 3.5,
    isHalf: true,
  };

  return (
    <>
      <ToastContainer />
      {/* <div className="pr_details_container py-3 mb-3" id={`${product.category}`}> */}
      <div className="pr_details_container py-3 mb-3">
        <div className="img_div m-1 p-1">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt="image" />
          </Link>
        </div>
        <div className="pr_details_div w-100 m-1 p-1">
          <h5 className="text-start">{product.title}</h5>
          <div>
            <span>
              {/* <ReactStars {...options} value={product.rating.rate} /> */}
              <StarRating value={product.rating.rate} />
            </span>
          </div>
            <h6 className="text-start">Price : {product.price} $</h6>
          <div className="btnGroup">
            <button
              className="btn btn-success m-1 "
              onClick={() => additemsToCart(product)}
            >
              Add to Cart
            </button>
            <Link to={`/product/${product.id}`}>
              <button className="btn  btn-info m-1">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
