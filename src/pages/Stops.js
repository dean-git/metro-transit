import React from "react";
import { useOutletContext } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Stops.scss";

const Stops = () => {
  const [stops] = useOutletContext();
  return (
    <Row className="stops">
      <Col xs={{ span: 8, offset: 2 }}>
        <Card>
          <Card.Header>Stops</Card.Header>
          <ListGroup variant="flush" id="route-stops">
            {stops}
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default Stops;
