import React from "react";
import { popularProducts } from "../data";
import { Container } from "./componentStyle/products.style";
import Product from "./Product";

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
