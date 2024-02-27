import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { Filter } from "./index";

import { useCart } from "./Context/Context";
import SingalProduct from "./SingalProduct";

const Home = () => {
  const {
    state: { products },
  } = useCart();

  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {products.map((item) => (
          <SingalProduct item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
