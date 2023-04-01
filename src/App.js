import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import { OrderPlaced } from "./Components/Confirmation/OrderPlaced";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Cart />}></Route>
        <Route path="/order" element={<OrderPlaced></OrderPlaced>}></Route>
      </Routes>
    </div>
  );
}

export default App;
