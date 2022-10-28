import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
// import { fetchAllProductsData } from "../../store/action/fetchAllProductAction";

const SingleProduct = ({ prQty }) => {
  const paramId = useParams();
  const [singlPproducts, setSingleProducts] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  // const dispatch=useDispatch();
  // const singleProduct=useSelector(state=>state);
  // console.log('singleProduct',singleProduct)

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${paramId.id}`)
      .then((res) => setSingleProducts(res))
      .catch((err) => setErrorMsg(err));
    // dispatch(fetchAllProductsData())
  }, []);

  return (
    <>
      <Navbar />
      <div className="mt-5">
        {singlPproducts?.data ? (
          <div className="d-flex container">
            <div className="img_div m-1 p-1">
              <img src={singlPproducts.data.image} alt="image" />
            </div>
            <div className="pr_details_div w-100 m-1 p-1">
              <h4>{singlPproducts.data.title}</h4>
              <p>{singlPproducts.data.description}</p>
              <h6>Price : {singlPproducts.data.price}</h6>
            </div>
          </div>
        ) : (
          <p>No product found!</p>
        )}
      </div>
    </>
  );
};

export default SingleProduct;
