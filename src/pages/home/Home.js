import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/Products";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllProductsData,
  getCategoryProduct,
} from "../../store/action/fetchAllProductAction";
import Loader from "../../components/Loader/Loader";
import Footer from "../footer/Footer";
import Category_buttons from "../../components/Category_buttons/Category_buttons";

const Home = () => {
  const dispatch = useDispatch();
  const AllproductsData = useSelector((state) => state.getAllproductsReducer);
  let productCategory = AllproductsData?.AllCategories;
  //unique categories
  let uniqueCategory = [
    ...new Set(
      productCategory?.map((item) => {
        return item;
      })
    ),
  ];
  // console.log(uniqueCategory);

  console.log("AllproductsData HomeP", AllproductsData);

  useEffect(() => {
    dispatch(fetchAllProductsData());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className=" p-3 mt-3 d-flex justify-content-center ">
        <button
          className="p-2 mx-3 btn_category"
          onClick={() => dispatch(fetchAllProductsData())}
        >
          All
        </button>
        {uniqueCategory?.map((category, index) => (
          <div className="">
            <Category_buttons category={category} index={index} />
          </div>
        ))}
      </div>

      <div className="mt-5 mb-2">
        {AllproductsData.loading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <div className="d-flex justify-content-center">
            {AllproductsData?.ProductLists?.length > 0 ? (
              <div className=" row  m-1 d-flex flex-wrap justify-content-center">
                {AllproductsData?.ProductLists?.map((product) => (
                  <div
                    key={product.id}
                    className="products_main_div col col-md-6 col-lg-3 text-center m-1"
                  >
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
      <Footer />
    </>
  );
};

export default Home;
