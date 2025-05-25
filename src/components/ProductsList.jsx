import { useState } from "react";
import Cart from "./Cart";
import ProductsCard from "./products/ProductsCard";
import { getAllProducts } from "/src/data/products.js";

export default function ProductsList({ searchTerm }) {
  const [shortBy, setShortBy] = useState("most-popular");
  const products = getAllProducts();

  const filteredItems = searchTerm
    ? products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  const shortedItems = [...filteredItems].sort((a, b) => {
    switch (shortBy) {
      case "most-popular":
        return b.rating - a.rating;
      case "newest":
        return new Date(b.create) - new Date(a.create);
      case "low-to-high":
        return a.price - b.price;
      case "high-to-low":
        return b.price - a.price;
      default:
        return 0;
    }
  });
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Your Products</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm">Sort by:</span>
              <select
                className="border rounded-md px-2 py-1 text-sm"
                value={shortBy}
                onChange={(e) => setShortBy(e.target.value)}
              >
                <option value="most-popular">Most Popular</option>
                <option value="newest">Newest</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="product-grid">
            {shortedItems.length > 0 ? (
              shortedItems.map((product) => (
                <ProductsCard key={product.id} product={product} />
              ))
            ) : (
              <p className="col-span-full text-center py-4">
                No products found matching your search.
              </p>
            )}
            {/* <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src="./assets/img/image 1.png"
                  alt="Gradient Graphic T-shirt"
                  className="h-full w-auto object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Gradient Graphic T-shirt </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center my-1">
                    <div className="flex text-yellow-400">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span className="text-gray-300">★</span>
                    </div>
                    <span className="text-xs text-gray-500 ml-1">4/5</span>
                  </div>
                  <span className="text-xs text-gray-700">(212 pcs left)</span>
                </div>
                <p className="font-bold">$145 </p>
                <button className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center">
                  Remove from Cart
                </button>
              </div>
            </div> */}
            {/* 
            <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src="./assets/img/image 10-2.png"
                  alt="Black Striped T-shirt"
                  className="h-full w-auto object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Black Striped T-shirt</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center my-1">
                    <div className="flex text-yellow-400">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span className="text-gray-300">★</span>
                      <span className="text-gray-300">★</span>
                    </div>
                    <span className="text-xs text-gray-500 ml-1">3/5</span>
                  </div>
                  <span className="text-xs text-gray-700">(420 pcs left)</span>
                </div>
                <div className="flex items-center">
                  <p className="font-bold">$120</p>
                  <p className="text-gray-400 line-through ml-2">$160</p>
                </div>
                <button
                  disabled
                  className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900 active:translate-y-1 transition-all active:bg-gray-900"
                >
                  Add to Cart
                </button>
              </div>
            </div> */}
          </div>
        </div>

        <Cart />
      </div>
    </>
  );
}
