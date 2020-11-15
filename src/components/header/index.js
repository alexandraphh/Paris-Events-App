import React from 'react';
import {
  Col,
  Row,
} from 'react-bootstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row>
        <Col>
          <h1 className="text-center text-uppercase font-weight-bold m-3">Ne manquez surtout pas ces évènements ! </h1>
        </Col>
        <Col>
          <img
            className="d-block mx-auto"
            src="https://cdn.pixabay.com/photo/2016/10/30/20/08/eiffel-tower-1784212_960_720.jpg"
            alt="Paris"
          />
        </Col>
      </Row>
    );
  }
}

export default Header;
