import { createContext } from "react";

export const ProductContext = createContext();

export const initialState = {
  cartData: [],
  searchTerm: "",
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cartData.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cartData: state.cartData.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cartData: [...state.cartData, { ...action.payload, quantity: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartData: state.cartData.filter((p) => p.id !== action.payload),
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        cartData: state.cartData.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };

    default:
      return state;
  }
};
