import { useContext } from "react";
import { ProductContext } from "../context";
import OrderSummary from "./products/OrderSummary";
import { getProductUrl } from "/src/utils/product-utility.js";

export default function Cart() {
  const { state, dispatch } = useContext(ProductContext);

  function removeFromCart(productId) {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: productId,
    });
  }
  function updateQty(productId, newQty) {
    if (newQty < 1) return;
    const product = state.cartData.find((item) => item.id === productId);
    if (newQty > product.stock) return;
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        id: productId,
        quantity: newQty,
      },
    });
  }
  return (
    <div className="lg:col-span-1">
      <div className="bg-white roundedLg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>
        {state.cartData.map((product) => (
          <div
            key={product.id}
            className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4"
          >
            <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
              <img
                src={getProductUrl(product.cover)}
                alt={product.title}
                className="h-full w-auto object-cover"
              />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between">
                <h3 className="font-medium">{product.title}</h3>
                <span
                  className="text-red-500 text-sm"
                  onClick={() => removeFromCart(product.id)}
                >
                  ×
                </span>
              </div>
              <p className="text-sm text-gray-500">Size: {product.size}</p>
              <p className="text-sm text-gray-500">Color: {product.Color}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="font-bold">${product.price}</p>
                <div className="flex items-center space-x-2">
                  <button
                    className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
                    onClick={() =>
                      updateQty(product.id, (product.quantity || 1) - 1)
                    }
                  >
                    −
                  </button>
                  <span className="text-sm">{product.quantity || 1}</span>
                  <button
                    className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
                    onClick={() =>
                      updateQty(product.id, (product.quantity || 1) + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <OrderSummary />
      </div>
    </div>
  );
}
