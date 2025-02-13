import React from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Users, ClipboardList } from "lucide-react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: #f3f4f6;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  width: 100%;
  max-width: 800px;

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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrapper = styled.div`
  color: #2563eb;
  margin-bottom: 16px;
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #374151;
`;

const CardDescription = styled.p`
  margin-top: 8px;
  color: #6b7280;
`;

const LogoutButton = styled.button`
  margin-top: 40px;
  background: #dc2626;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1.125rem;
  font-weight: bold;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: background 0.2s, transform 0.2s;
  
  &:hover {
    background: #b91c1c;
    transform: scale(1.05);
  }
`;

const Dashboard = () => {
  const navigate = useNavigate();

  const features = [
    { icon: <BookOpen size={40} />, title: "Manage Books", desc: "Add, update, and organize books in the library." },
    { icon: <Users size={40} />, title: "Manage Members", desc: "Track and manage library members and their activities." },
    { icon: <ClipboardList size={40} />, title: "Transactions", desc: "Monitor book checkouts and returns." }
  ];

  return (
    <Container>
      <Title>Library Dashboard</Title>
      <Grid>
        {features.map((feature, index) => (
          <Card key={index}>
            <IconWrapper>{feature.icon}</IconWrapper>
            <CardTitle>{feature.title}</CardTitle>
            <CardDescription>{feature.desc}</CardDescription>
          </Card>
        ))}
      </Grid>
      <LogoutButton onClick={() => navigate('/login')}>Logout</LogoutButton>
    </Container>
  );
};

export default Dashboard;
