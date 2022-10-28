import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/Products";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProductsData } from "../../store/action/fetchAllProductAction";
import Loader from "../../components/Loader/Loader";

const Home = () => {
 
  const dispatch = useDispatch();
  const AllproductsData = useSelector((state) => state.getAllproductsReducer);

  console.log("AllproductsData HomeP", AllproductsData);
  // console.log("singledata HomeP", singledata)

  useEffect(() => {
    // axios
    //   .get("https://fakestoreapi.com/products")
    //   .then((res) => setProducts(res))
    //   .catch((err) => setErrorMsg(err));

    dispatch(fetchAllProductsData());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="mt-5">
        {/* {AllproductsData.error&&<div>ERRORS</div>} */}

        {AllproductsData.loading ? (
          <div><Loader/></div>
        ) : (
          <div>
            {AllproductsData?.Allproducts.data?.length > 0 ? (
              <div>
                {AllproductsData?.Allproducts.data?.map((product) => (
                  <div key={product.id}>
                    <Products product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <p>No products found</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
