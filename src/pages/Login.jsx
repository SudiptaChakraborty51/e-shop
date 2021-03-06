import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
              rgba(255,255,255,0.5),
              rgba(255,255,255,0.5)), 
              url("https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  background-position: center; 
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #f0fdfa;
  border-radius: 5px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Input= styled.input`
  flex: 1;
  min-width: 80%;
  margin: 10px 0px;
  padding: 10px;
  border: 2px solid teal;
  border-radius: 5px;
  background-color: transparent;
`;

const Button = styled.button`
  width: 40%;
  border: 2px solid teal;
  margin: 10px 0px;
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
  font-weight: 700;
  color: gray;

  &: hover {
    background-color: teal;
    color: white;
    transition: all 0.5s ease;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="username" />
            <Input placeholder="password" />
            <Button>LOGIN</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
    </Container>
  )
}

export default Login