import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/products/:category" element = {<ProductList />}/>
        <Route path="/product/:id" element = {<Product/>}/>
        <Route path="/cart" element = {<Cart />}/>
        <Route path="/register" element = {<Register />}/>
        <Route path="/login" element = {<Login />}/>
    </Routes>
    </div>
  );
}

export default App;
