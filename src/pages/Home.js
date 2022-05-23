import React, { useState, useEffect } from "react";
import "./Home.scss";
import { Outlet, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import forEach from "lodash/forEach";
import isEqual from "lodash/isEqual";
import companyLogo from "../assets/MetroTransitLogo.svg";

const Home = () => {
  const [routes, setRoutes] = useState([{}]);
  const [selectedRoute, setSelectedRoute] = useState("defaultRouteOption1");
  const [selectedDirection, setSelectedDirection] = useState(
    "defaultDirectionOption1"
  );
  const [directionOptions, setDirectionOptions] = useState([]);
  const [stops, setStops] = useState([]);
  const navigate = useNavigate();
  const Context = React.createContext({});

  useEffect(() => {
    fetch("http://svc.metrotransit.org/nextripv2/routes")
      .then((response) => response.json())
      .then((data) => setRoutes(data));
    navigate("/");
  }, []);

  const getRouteOptions = (data) => {
    let routeOptions = [];
    routeOptions.push(
      <option
        data-testid="route-select-option"
        value={"defaultRouteOption1"}
        key={"defaultRouteOption1"}
      >
        {"Select route"}
      </option>
    );
    forEach(data, (route) => {
      routeOptions.push(
        <option
          data-testid="route-select-option"
          value={route.route_id}
          key={route.route_id}
        >
          {route.route_label}
        </option>
      );
    });
    return routeOptions;
  };
  const getDirectionOptions = (data) => {
    let directionOptions = [];
    directionOptions.push(
      <option
        data-testid="direction-select-option"
        value={"defaultDirectionOption1"}
        key={"defaultDirectionOption1"}
      >
        {"Select direction"}
      </option>
    );
    forEach(data, (direction) => {
      directionOptions.push(
        <option
          data-testid="direction-select-option"
          value={direction.direction_id}
          key={direction.direction_id}
        >
          {direction.direction_name}
        </option>
      );
    });
    setDirectionOptions(directionOptions);
  };
  const getStops = (data) => {
    let stopsList = [];
    forEach(data, (stops) => {
      stopsList.push(
        <ListGroup.Item aria-labelledby="route-stops">
          {stops.description}
        </ListGroup.Item>
      );
    });
    setStops(stopsList);
  };
  const handleRouteChange = (e) => {
    if (!isEqual(e.target.value, "defaultRouteOption1")) {
      setSelectedRoute(e.target.value);
      fetch(
        "https://svc.metrotransit.org/nextripv2/directions/" + e.target.value
      )
        .then((response) => response.json())
        .then((data) => getDirectionOptions(data));
      navigate("/direction");
      setSelectedDirection("defaultDirectionOption1");
    } else {
      navigate("/");
      setDirectionOptions([]);
      setSelectedDirection("defaultDirectionOption1");
      setSelectedRoute("defaultRouteOption1");
    }
  };

  const handleDirectionChange = (e) => {
    setSelectedDirection(e.target.value);
    if (!isEqual(e.target.value, "defaultDirectionOption1")) {
      fetch(
        "https://svc.metrotransit.org/nextripv2/stops/" +
          selectedRoute +
          "/" +
          e.target.value
      )
        .then((response) => response.json())
        .then((data) => getStops(data));
      navigate("/direction/stops");
    } else {
      navigate("/direction");
    }
  };

  return (
    <Context.Provider value={{ foo: "bar" }}>
      <Container>
        <div className="home-header-logo">
          <img src={companyLogo} alt="Metro Transit logo" />
          <h2>Real Time Routes Display</h2>
        </div>
        <Row className="home-row">
          <Col xs={{ span: 6, offset: 3 }}>
            <Form.Group controlId="formGroupRoute">
              <Form.Label size="lg" data-testid="route-label">
                Route:
              </Form.Label>
              <Form.Select
                data-testid="route-select"
                size="lg"
                onChange={handleRouteChange}
                value={selectedRoute}
                aria-label="route options"
              >
                {getRouteOptions(routes)}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Outlet
          context={[
            directionOptions,
            handleDirectionChange,
            selectedDirection,
            stops,
          ]}
        />
      </Container>
    </Context.Provider>
  );
};

export default Home;
