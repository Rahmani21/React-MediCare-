import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutUs";
import Product_List from "./components/products/Product_List";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/product-list" element={<Product_List />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
