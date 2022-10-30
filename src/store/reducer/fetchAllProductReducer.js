import {
  ADD_TO_CART_PRODUCT,
  CART_PRODUCT_DELETE,
  FETCH_ALL_PRODUCTS_FAIL,
  FETCH_ALL_PRODUCTS_REQUEST,
  FETCH_ALL_PRODUCTS_SUCCESS,
  GET_CATEGORY_PRODUCT,
  PRODUCT_QTY_DECREASE,
} from "../../constants/constants";

const initialState = {
  loading: true,
  Allproducts: [],
  Added_to_cart: [],
  AllCategories: [],
  // Quantity: 1,
  error: "",
};

export const getAllproductsReducer = (state = initialState, action) => {
  let findProduct;
  let existProductIndex;
  switch (action.type) {
    case FETCH_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        Allproducts: action.payload,
        AllCategories: action.payload.data.map((cat) => cat.category),
        ProductLists: action.payload.data,
        error: "",
      };
    case FETCH_ALL_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        Allproducts: [],
        error: action.paylaod,
      };
    case ADD_TO_CART_PRODUCT:
      findProduct = state.Added_to_cart.find((i) => i.id === action.payload.id);
      existProductIndex = state.Added_to_cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existProductIndex >= 0) {
        findProduct.productQty += 1;
        state.Added_to_cart[existProductIndex] = findProduct;
        // console.log("findPro", findPro);
        return {
          ...state,
          loading: false,
          error: "",
          Added_to_cart: [...state.Added_to_cart],
        };
      } else {
        let newProduct = { ...action.payload, productQty: 1 };
        return {
          ...state,
          loading: false,
          Added_to_cart: [...state.Added_to_cart, newProduct],
          error: "",
        };
      }

    case CART_PRODUCT_DELETE:
      let remainingProduct = state.Added_to_cart.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        loading: false,
        Added_to_cart: remainingProduct,
        error: "",
      };
    case PRODUCT_QTY_DECREASE:
      findProduct = state.Added_to_cart.find((i) => i.id === action.payload.id);
      existProductIndex = state.Added_to_cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (action.payload.productQty > 1) {
        findProduct.productQty -= 1;
        state.Added_to_cart[existProductIndex] = findProduct;
        return {
          ...state,
          loading: false,
          error: "",
          Added_to_cart: [...state.Added_to_cart],
        };
      }
    case GET_CATEGORY_PRODUCT:
      let categoryPr = state.Allproducts.data.filter(
        (item) => item.category === action.payload
      );
      state.ProductLists = categoryPr;
      return {
        ...state,
        loading: false,
        error: "",
      };

    default:
      return state;
  }
};
