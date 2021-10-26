import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Register.css";

const Register = () => {
  return (
    <div>
      <Form className="border rounded p-4 mx-auto" style={{ width: 450 }}>
        <h3 className="text-primary">Register as a Volunteer</h3>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Full Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Username or email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Description" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Organize books at the library</Form.Label>
          <Form.Control type="text" placeholder="Organize books and library" />
        </Form.Group>
        <Button className="w-100">Register</Button>
      </Form>
    </div>
  );
};

export default Register;
