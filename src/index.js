import React from 'react';
// import React, { Component } from 'react'; // UTILISE POUR LES CLASS
import ReactDOM from 'react-dom';
import {
  Col,
  Container,
  Row,
} from 'react-bootstrap';

import axios from 'axios';
import NavBar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import List from './components/events-list';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      searchValue: '',
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.valueCallback = this.valueCallback.bind(this);
  }

  componentDidMount() {
    axios.get('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&facet=category&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=access_type&facet=price_type')
      .then((res) => {
        this.setState({ events: res.data.records });
      });
  }

  valueCallback(searchValues) {
    this.setState({
      searchValue: searchValues,
    });
  }

  render() {
    const { events, searchValue } = this.state;
    return (
      <div>
        <NavBar valueCallback={this.valueCallback} />
        <Container>
          <Row>
            <Col>
              <Header />
              <hr className="my-4" />
              <List events={events} searchValue={searchValue} />
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
