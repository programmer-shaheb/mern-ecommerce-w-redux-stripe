import React from "react";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { Container } from "./componentStyle/categories.style";

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Categories;
