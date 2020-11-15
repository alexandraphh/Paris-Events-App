import React from 'react';
import {
  Col,
  Row,
} from 'react-bootstrap';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Row>
        <Col>
          <h2 className="text-center text-uppercase font-weight-bold m-3">Liste des évènements</h2>
        </Col>
      </Row>
    );
  }
}

export default List;
