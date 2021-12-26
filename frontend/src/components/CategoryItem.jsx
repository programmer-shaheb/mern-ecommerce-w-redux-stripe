import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Image,
  Info,
  Title,
} from "./componentStyle/categoryItem.style";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link to={`/products/${item.cat}`}>
          <Button>SHOP NOW</Button>
        </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
