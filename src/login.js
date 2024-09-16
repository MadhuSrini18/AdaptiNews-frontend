import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from './AuthContext';


// Define your color palette
const colors = {
  primary: '#4070f4',
  text: '#1a202c',
  background: '#f0f2f5',
  buttonHover: '#365abf',
};

// Styled components
const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${colors.background};
`;

const Section = styled.section`
  padding: 20px;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

const Title = styled.p`
  font-size: 2em;
  color: ${colors.text};
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  color: ${colors.text};
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: ${colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${colors.buttonHover};
  }
`;

const Text = styled.p`
  color: ${colors.text};
  text-align: center;
  margin-top: 20px;
`;

const StyledNavLink = styled(NavLink)`
  color: ${colors.primary};
`;

// Login component
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useAuth();


  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <Main>
      <Section>
        <Title>Login</Title>
        <Form>
          <Label htmlFor="email-address">Email address</Label>
          <Input
            id="email-address"
            type="email"
            required
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={onLogin}>Login</Button>
        </Form>
        <Text>
          No account yet? <StyledNavLink to="/signup">Sign up</StyledNavLink>
        </Text>
      </Section>
    </Main>
  );
};

export default Login;
