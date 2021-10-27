import { Card, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./ShowEvents.css";

const ShowEvents = (props) => {
  const history = useHistory();
  const { title, imageLink, _id } = props.event;
  const handleEventUpdate = () => {
    history.push(`/updateEvent/${_id}`);
  };
  return (
    <>
      <Col md={3} lg={3} sm={12}>
        <Card style={{ width: "17.5rem", margin: "3px" }}>
          <Card.Img variant="top" src={imageLink} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Button
              onClick={() => handleEventUpdate(_id)}
              className="me-2 btn-success"
            >
              Update
            </Button>
            <Button className="btn-danger">Delete</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ShowEvents;
