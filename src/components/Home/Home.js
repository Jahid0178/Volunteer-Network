import React, { useEffect, useState } from "react";
import {
  Container,
  FormControl,
  InputGroup,
  Button,
  Row,
} from "react-bootstrap";
import ShowEvents from "../ShowEvents/ShowEvents";
import "./Home.css";

const Home = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <div>
      <Container>
        <h2 className="text-center py-2">I GROW BY HELPING PEOPLE IN NEED</h2>
        <InputGroup className="mb-3 mx-auto" style={{ width: 400 }}>
          <FormControl placeholder="Search" aria-label="Search" />
          <Button variant="primary">Search</Button>
        </InputGroup>
        <Row>
          {events.map((event) => (
            <ShowEvents key={event._id} event={event}></ShowEvents>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
