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
 
          </div>
        </div>

        <Cart />
      </div>
    </>
  );
}
