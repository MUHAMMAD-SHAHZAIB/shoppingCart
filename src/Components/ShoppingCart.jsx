import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";

import { useCart } from "./Context/Context";
import { SingalProduct } from "./index";

const ShoppingCart = () => {
  const {
    state: { products },
  } = useCart();

  return (
    <div className="home">
      {/* <div className="filters summary">
        <span className="title">Subtotal 45 items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ 2</span>
        <Button type="button" disabled="">
          Proceed to Checkout
        </Button>
      </div> */}
      <div className="productContainer">
        {products.map((item) => (
          <SingalProduct item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
