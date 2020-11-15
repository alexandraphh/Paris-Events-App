import React from 'react';
// import React, { Component } from 'react'; // UTILISE POUR LES CLASS
import ReactDOM from 'react-dom';
import {
  Col,
  Container,
  Row,
} from 'react-bootstrap';

import NavBar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import List from './components/events-list';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <Row>
            <Col>
              <Header />
              <hr className="my-4" />
              <List />
              <hr className="my-4" />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
