import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();
const Context = ({ children }) => {
  // Product array
  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    inStock: faker.number.int({ min: 0, max: 10 }),
    fastDelivery: faker.datatype.boolean(),
    ratings: Math.floor(Math.random() * 5) + 1,
  }));

  // create a cartReducer reducers
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  // create a productReducer reducers
  const [productState, productDispatch] = useReducer(productReducer);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const useCart = () => {
  return useContext(Cart);
};

export default Context;
export { Cart };
