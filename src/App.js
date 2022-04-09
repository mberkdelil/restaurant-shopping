import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Desserts from "./Desserts";
import Drinks from "./Drinks";
import Food from "./Food";
import Menu from "./Menu";
import NewProduct from "./NewProduct";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/foods" element={<Food />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/yeniurun" element={<NewProduct />} />
      </Routes>
    </div>
  );
}

export default App;
