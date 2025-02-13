import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
  padding: 24px;
`;

const Card = styled.div`
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: #1f2937;
`;

const Form = styled.form`
  margin-top: 24px;
`;

const Label = styled.label`
  display: block;
  color: #374151;
  font-weight: 500;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s;
  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 8px rgba(37, 99, 235, 0.3);
  }
`;

const Button = styled.button`
  width: 100%;
  margin-top: 24px;
  background: #2563eb;
  color: white;
  padding: 12px;
  border-radius: 8px;
  font-size: 1.125rem;
  font-weight: bold;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: #1d4ed8;
    transform: scale(1.05);
  }
`;

const SignupText = styled.p`
  text-align: center;
  color: #6b7280;
  margin-top: 16px;
`;

const SignupLink = styled.span`
  color: #2563eb;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: #1d4ed8;
  }
`;

const SignupPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // Add signup logic here
    navigate("/dashboard");
  };

  return (
    <Container>
      <Card>
        <Title>Library Signup</Title>
        <Form onSubmit={handleSignup}>
          <div>
            <Label>Name</Label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div style={{ marginTop: "16px" }}>
            <Label>Email</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={{ marginTop: "16px" }}>
            <Label>Password</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Signup</Button>
          <SignupText>
            Already have an account?{" "}
            <SignupLink onClick={() => navigate("/login")}>Login</SignupLink>
          </SignupText>
        </Form>
      </Card>
    </Container>
  );
};

export default SignupPage;
