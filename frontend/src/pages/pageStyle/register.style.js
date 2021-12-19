import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: lightgray;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  text-align: center;
  ${mobile({ width: "75%" })}
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  outline: none;
`;

export const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

export const Button = styled.button`
  width: 100%;
  font-weight: 500;
  border: none;
  padding: 15px 20px;
  background-color: #fcb800;
  color: black;
  cursor: pointer;
`;
