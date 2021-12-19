import React from "react";
import {
  Button,
  Container,
  Form,
  Input,
  Link,
  Title,
  Wrapper,
} from "./pageStyle/login.style";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>Forgot your password?</Link>
          <Link>Register</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
