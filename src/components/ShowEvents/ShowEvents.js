import { Card, Col } from "react-bootstrap";
import "./ShowEvents.css";

const ShowEvents = (props) => {
  const { title, imageLink } = props.event;
  return (
    <>
      <Col md={3} lg={3} sm={12}>
        <Card style={{ width: "17.5rem", margin: "3px" }}>
          <Card.Img variant="top" src={imageLink} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ShowEvents;
