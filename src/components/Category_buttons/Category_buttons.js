import React from "react";
import './Category_button.css';
import { useDispatch } from "react-redux";
import { getCategoryProduct } from "../../store/action/fetchAllProductAction";

const Category_buttons = ({ category, index }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div >
        <button
          className=" p-2 mx-3 btn_category"
          onClick={() => dispatch(getCategoryProduct(category))}
        >
          {category}
        </button>
      </div>
    </>
  );
};

export default Category_buttons;
