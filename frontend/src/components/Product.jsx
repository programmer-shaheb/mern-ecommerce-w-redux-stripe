import React from "react";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import {
  Circle,
  Container,
  Icon,
  Image,
  Info,
} from "./componentStyle/product.style";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <>
      <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <Link to={`/product/${item._id}`}>
              <SearchOutlined />
            </Link>
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container>
    </>
  );
};

export default Product;
