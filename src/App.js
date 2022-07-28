import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Products2 from "./pages/Products2";
import Products3 from "./pages/Products3";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products2" element={<Products2 />} />
          <Route path="/products3" element={<Products3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
