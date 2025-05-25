import { useState } from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import ProductsList from "./components/ProductsList";
import { ProductContext } from "./context";

export default function App() {
  const [cartData, setCartData] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(term) {
    setSearchTerm(term);
  }
  return (
    <>
    <ProductContext.Provider value={{cartData, setCartData}}>
      <AnnouncementBar />
      <Header onSearch={handleSearch} />
      <main className="container mx-auto px-4 md:px-8 py-8">
        <ProductsList searchTerm={searchTerm} />
      </main>
      <Newsletter />
      <Footer />
      </ProductContext.Provider>
    </>
  );
}
