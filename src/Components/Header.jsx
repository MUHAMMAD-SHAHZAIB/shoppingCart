import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  DropdownMenu,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import "./style.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>
            <a to="/">Shopping Cart</a>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              type="search"
              placeholder="Search a product..."
              className="m-auto"
            />
          </Navbar.Text>

          <Nav>
            <Dropdown alignRight>
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge>0</Badge>
              </Dropdown.Toggle>
              <DropdownMenu style={{ minWidth: 370 }}>
                <span className="cartitem">
                  <img src="" alt="" className="cartItemImg" />
                  <div className="cartItemDetail">
                    <span>shah</span>
                    <span>34$</span>
                  </div>
                  <AiFillDelete fontSize="20px" style={{ cursor: "pointer" }} />
                </span>
                <a>
                  <Button style={{ width: "95%", margin: "0 10px" }}>
                    Go To Cart
                  </Button>
                </a>

                <span style={{ padding: 10 }}>Cart is Empty!</span>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
