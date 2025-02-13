import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: linear-gradient(to right, #3b82f6, #a855f7, #ec4899);
`;

const Header = styled.header`
  text-align: center;
  max-width: 1024px;
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  margin-top: 16px;
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 40px;
  max-width: 1024px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background: white;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #374151;
`;

const CardText = styled.p`
  color: #6b7280;
  margin-top: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 40px;
`;

const Button = styled.button`
  background: ${(props) => props.bgColor || "#4f46e5"};
  color: white;
  padding: 12px 24px;
  border-radius: 9999px;
  font-size: 1.125rem;
  font-weight: bold;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: ${(props) => props.hoverColor || "#4338ca"};
    transform: scale(1.05);
  }
`;

const LibraryLanding = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <Title>Welcome to Library Management System</Title>
        <Subtitle>Effortlessly manage books, members, and transactions with our modern library management solution.</Subtitle>
      </Header>

      <Section>
        <Card>
          <CardTitle>Easy Book Management</CardTitle>
          <CardText>Add, update, and categorize books efficiently.</CardText>
        </Card>
        <Card>
          <CardTitle>Member Tracking</CardTitle>
          <CardText>Keep track of members and their borrowing history.</CardText>
        </Card>
        <Card>
          <CardTitle>Seamless Transactions</CardTitle>
          <CardText>Monitor book checkouts and returns with ease.</CardText>
        </Card>
      </Section>

      <ButtonContainer>
        <Button bgColor="#facc15" hoverColor="#eab308" onClick={() => navigate('/login')}>
          Login
        </Button>
        <Button bgColor="#10b981" hoverColor="#059669" onClick={() => navigate('/signup')}>
          Signup
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default LibraryLanding;
