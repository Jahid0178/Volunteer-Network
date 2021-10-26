import React from "react";
import { Container, FormControl, InputGroup, Button } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Container>
        <h2 className="text-center py-2">I GROW BY HELPING PEOPLE IN NEED</h2>
        <InputGroup className="mb-3 mx-auto" style={{ width: 400 }}>
          <FormControl placeholder="Search" aria-label="Search" />
          <Button variant="primary">Search</Button>
        </InputGroup>
      </Container>
    </div>
  );
};

export default Home;
