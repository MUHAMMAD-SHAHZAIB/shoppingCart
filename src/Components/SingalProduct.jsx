import React from "react";
import { Card, Button } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";

const SingalProduct = ({ item }) => {
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
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingalProduct;
