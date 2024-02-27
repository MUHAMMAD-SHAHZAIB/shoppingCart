import React from "react";
import { Card, Button } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { useCart } from "./Context/Context";
useCart;

const SingalProduct = ({ item }) => {
  const {
    state: { cart },
    dispatch,
  } = useCart();

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={item.image} alt={item.name} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>Price : ${item.price.split(".")}</span>
            <br />
            <span>Delivery Time :</span>{" "}
            {item.fastDelivery ? "Fast Delivery" : "After 4 Days Delivery"}
          </Card.Subtitle>

          {cart.some((cartItem) => cartItem.id === item.id) ? (
            <Button variant="danger">Remove from Cart</Button>
          ) : (
            <Button
              variant={!item.inStock ? "warning" : "primary"}
              onClick={() => dispatch({ action: "ADD_TO_CART", payload: item })}
            >
              {!item.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingalProduct;
