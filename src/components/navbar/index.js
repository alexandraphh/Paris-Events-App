import React from 'react';
import { Geo } from 'react-bootstrap-icons';
import {
  Col,
  Row,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row>
        <Col>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
              <Geo />
              <span className="ml-2">PARIS EVENTS</span>
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#">Animations</Nav.Link>
              <Nav.Link href="#">Concerts</Nav.Link>
              <Nav.Link href="#">Evènements</Nav.Link>
              <Nav.Link href="#">Expositions</Nav.Link>
              <Nav.Link href="#">Spectacles</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Recherchez un évènement" className="mr-sm-2" />
              <Button variant="secondary">Rechercher</Button>
            </Form>
          </Navbar>
        </Col>
      </Row>
    );
  }
}

export default NavBar;
