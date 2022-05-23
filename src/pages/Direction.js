import React from "react";
import "./Direction.scss";
import { Outlet, useOutletContext } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Direction = () => {
  const [directionOptions, handleDirectionChange, selectedDirection, stops] =
    useOutletContext();
  return (
    <>
      <Row className="direction-row">
        <Col xs={{ span: 6, offset: 3 }}>
          <Form.Group controlId="formGroupDirection">
            <Form.Label size="lg" data-testid="direction-label">
              Direction:
            </Form.Label>
            <Form.Select
              size="lg"
              onChange={handleDirectionChange}
              value={selectedDirection}
              aria-label="direction options"
            >
              {directionOptions}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Outlet context={[stops]} />
    </>
  );
};

export default Direction;
