import React from "react";
import { Button, Form } from "react-bootstrap";
import { Rating } from "./index";

const Filter = () => {
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check inline label="Ascending" name="group1" type="radio" />
      </span>

      <span>
        <Form.Check inline label="Descending" name="group1" type="radio" />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
        />
      </span>

      <span>
        <label style={{ paddingRight: 10 }}>
          Rating: <Rating />{" "}
        </label>
      </span>
      <Button variant="light">Clear Filters</Button>
    </div>
  );
};

export default Filter;
