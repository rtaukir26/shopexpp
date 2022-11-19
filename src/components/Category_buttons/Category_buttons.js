import React from "react";
import './Category_button.css';
import { useDispatch } from "react-redux";
import { getCategoryProduct } from "../../store/action/fetchAllProductAction";
import { HashLink } from "react-router-hash-link";

const Category_buttons = ({ category, index }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div >
        {/* <HashLink to={`/#${category}`}> */}

        <button
          className=" p-2 mx-3 btn_category"
          onClick={() => dispatch(getCategoryProduct(category))}
          >
          {category}
        </button>
          {/* </HashLink> */}
      </div>
    </>
  );
};

export default Category_buttons;
