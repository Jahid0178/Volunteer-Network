import React, { useRef } from "react";
import { Col, Form, Row, Button, Container } from "react-bootstrap";
import "./AddEvents.css";

const AddEvents = () => {
  const titleRef = useRef();
  const dateRef = useRef();
  const textMessageRef = useRef();
  const imageLinkRef = useRef();

  const handleAddEvent = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const date = dateRef.current.value;
    const textMessage = textMessageRef.current.value;
    const imageLink = imageLinkRef.current.value;

    const data = { title, date, textMessage, imageLink };

    fetch("http://localhost:4000/addEvents", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Event Added Successfully");
          titleRef.current.value = "";
          dateRef.current.value = "";
          textMessageRef.current.value = "";
          imageLinkRef.current.value = "";
        }
      });
  };

  return (
    <div>
      <Container>
        <h2 className="text-center">Add Events</h2>
        <Form style={{ width: 950 }} className="mx-auto">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Event Title</Form.Label>
              <Form.Control
                ref={titleRef}
                type="text"
                placeholder="Event Title"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Event Date</Form.Label>
              <Form.Control ref={dateRef} type="date" />
            </Form.Group>
          </Row>

          <Row>
            <Col md={6} sm={12}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  ref={textMessageRef}
                  as="textarea"
                  rows={3}
                  placeholder="Description"
                />
              </Form.Group>
            </Col>

            <Col md={6} sm={12}>
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Banner or Image link</Form.Label>
                <Form.Control
                  ref={imageLinkRef}
                  placeholder="Banner or Image link"
                />
              </Form.Group>
            </Col>
          </Row>
          <Button onClick={handleAddEvent} variant="primary" type="submit">
            Add Event
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddEvents;
