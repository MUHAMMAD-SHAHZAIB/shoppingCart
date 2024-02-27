import React from "react";
import "./App.css";
import { Header, ShoppingCart, Home } from "./Components";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/shopping-cart" element={<ShoppingCart />} />
    </Route>
  )
);
const App = () => {
  return (
    <>
      <Header />
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
