import React from 'react';
import {
  Col,
  Row,
} from 'react-bootstrap';
import axios from 'axios';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    axios.get('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&facet=category&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=access_type&facet=price_type')
      .then((res) => {
        console.log(res.data.records);
        this.setState({ events: res.data.records });
      });
  }

  render() {
    const { events } = this.state;
    return (
      <Row>
        <Col>
          <h2 className="text-center text-uppercase font-weight-bold m-3">Liste des évènements</h2>
          {events.map((event) => (
            <h3 className="text-center m-5" key={event.fields.id}>
              {event.fields.title}
              :
              {event.fields.price_type}
              <img className="img-thumbnail m-4" src={event.fields.cover_url} alt="event" width="100%" />
              {event.fields.contact_facebook}
            </h3>
          ))}
        </Col>
      </Row>
    );
  }
}

export default List;
