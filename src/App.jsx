import { useReducer } from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import ProductsList from "./components/ProductsList";
import { initialState, ProductContext, productReducer } from "./context";

export default function App() {
  const [state, dispatch] = useReducer(productReducer, initialState)

  function handleSearch(term) {
    dispatch({
      type: "SET_SEARCH_TERM",
      payload: term
    })
  }
  return (
    <>
    <ProductContext.Provider value={{state, dispatch}}>
      <AnnouncementBar />
      <Header onSearch={handleSearch} />
      <main className="container mx-auto px-4 md:px-8 py-8">
        <ProductsList searchTerm={state.searchTerm} />
      </main>
      <Newsletter />
      <Footer />
      </ProductContext.Provider>
    </>
  );
}
