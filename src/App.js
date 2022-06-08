import "../src/component/App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [cardItems, setCardItems] = useState([]);
  const [productLs, setProductls] = useState([]);
  //...........
  useEffect(() => {
    let oldProductls = localStorage.getItem("productLs");
    let parsedOldProductls = JSON.parse(oldProductls);
    setProductls(parsedOldProductls);
  }, []);

  useEffect(() => {
    localStorage.setItem("productLs", JSON.stringify(productLs));
  }, [productLs]);
  const handleAddProduct = (product, id) => {
    const productExist = cardItems.find((item) => item.id === product.id);
    if (productExist) {
      setCardItems(
        cardItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
      setProductls([...productLs, product]);
    } else {
      setCardItems([...cardItems, { ...product, quantity: 1 }]);
    }
  };
  const handleRemoveProduct = (product) => {
    const productExist = cardItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCardItems(cardItems.filter((item) => item.id !== product.id));
      localStorage.clear();
    } else {
      setCardItems(
        cardItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };
  useEffect(() => {
    console.log(cardItems);
  }, [cardItems]);
  return (
    <Router>
      <Navbar itemsCount={cardItems.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/" element={<Products />} />
        <Route
          path="/products/:id"
          element={
            <Product
              cardItems={cardItems}
              setCardItems={setCardItems}
              handleAddProduct={handleAddProduct}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cardItems={cardItems}
              setCardItems={setCardItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
