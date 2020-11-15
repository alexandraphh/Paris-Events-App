import React from 'react';
import {
  Col,
  Row,
} from 'react-bootstrap';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row className="text-light bg-dark p-3">
        <Col>
          <h3 className="small text-center text-uppercase font-weight-bold m-3">© Paris Events </h3>
        </Col>
      </Row>
    );
  }
}

export default Footer;
