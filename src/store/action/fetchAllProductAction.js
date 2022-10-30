import axios from "axios";
import {
  PRODUCT_QTY_DECREASE,
  CART_PRODUCT_DELETE,
  ADD_TO_CART_PRODUCT,
  BASE_URL,
  FETCH_ALL_PRODUCTS_FAIL,
  FETCH_ALL_PRODUCTS_REQUEST,
  FETCH_ALL_PRODUCTS_SUCCESS,
  GET_CATEGORY_PRODUCT,
} from "../../constants/constants";

export const getAllProductsRequest = () => {
  return {
    type: FETCH_ALL_PRODUCTS_REQUEST,
  };
};

export const getAllProductsSuccess = (AllProducts) => {
  return {
    type: FETCH_ALL_PRODUCTS_SUCCESS,
    payload: AllProducts,
  };
};

export const getAllProductsFail = (error) => {
  return {
    type: FETCH_ALL_PRODUCTS_FAIL,
    payload: error,
  };
};
export const addToCartProduct = (addedProduct) => {
  return {
    type: ADD_TO_CART_PRODUCT,
    payload: addedProduct,
  };
};
export const cartProductDelete = (id) => {
  return {
    type: CART_PRODUCT_DELETE,
    payload: id,
  };
};
export const productQtyDecreasing = (product) => {
  return {
    type: PRODUCT_QTY_DECREASE,
    payload: product,
  };
};
export const getCategoryProduct = (category) => {
  return {
    type: GET_CATEGORY_PRODUCT,
    payload: category,
  };
};



export const fetchAllProductsData = (data) => {
  return (dispatch) => {
    // const token = JSON.parse(localStorage.getItem("access_token"));
    dispatch(getAllProductsRequest);
    axios
      .get(`${BASE_URL}/products`)
      .then((res) => dispatch(getAllProductsSuccess(res)))
      .catch((err) => dispatch(getAllProductsFail(err)));

    // fetch(`${BASE_URL}/api/notifications`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${token}`,
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const notificationData = data.data;
    //     console.log(">>123", notificationData);
    //     const ordersCount = notificationData?.data?.filter(
    //       (user) => user.user_id !== localStorage.getItem("userID")
    //     );
    //     dispatch(getNotificationSuccess(ordersCount));
    //   })
    //   .catch((err) => {
    //     const errorMsg = err.message;
    //     dispatch(getNotificationFail(errorMsg));
    //   });
  };
};
