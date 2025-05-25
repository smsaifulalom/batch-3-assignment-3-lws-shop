import { useContext } from "react";
import { ProductContext } from "../../context";
import Rating from "./Rating";
import { getProductUrl } from "/src/utils/product-utility.js";

export default function ProductsCard({ product }) {
  const { state, dispatch } = useContext(ProductContext);
  const { cartData } = state;

  const isInCart = cartData.some((item) => item.id === product.id);
  const cartItem = cartData.find((item) => item.id === product.id);
  const stockManage = product.stock - (cartItem?.quantity || 0);

  const handleAddtoCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  function handleRemoveFromCart(productId) {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: productId,
    });
  }

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img
          src={getProductUrl(product.cover)}
          alt={product.title}
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{product.title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center my-1">
            <Rating value={product.rating} />
            <span className="text-xs text-gray-500 ml-1">
              {product.rating}/5
            </span>
          </div>
          <span className="text-xs text-gray-700">
            ({stockManage} pcs left)
          </span>
        </div>
        <p className="font-bold">${product.price}</p>
        {product.regularPrice !== "" && (
          <p className="text-gray-400 line-through ml-2">
            ${product.regularPrice}
          </p>
        )}
        {stockManage === 0 ? (
          <button
            disabled
            className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900 active:translate-y-1 transition-all active:bg-gray-900"
          >
            Add to Cart
          </button>
        ) : isInCart ? (
          <button
            className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center"
            onClick={() => handleRemoveFromCart(product.id)}
          >
            Remove from Cart
          </button>
        ) : (
          <button
            disabled={stockManage === 0}
            className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900"
            onClick={() => handleAddtoCart(product)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
