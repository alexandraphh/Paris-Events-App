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
    this.componentDidMount = this.componentDidMount.bind(this);
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
            <div className="text-center m-5" key={event.fields.id}>
              <h3 className="text-uppercase">{event.fields.title}</h3>
              {event.fields.price_type}
              <img className="img-thumbnail m-4" src={event.fields.cover_url} alt="event" width="100%" />
              <p className="font-weight-bold">{event.fields.lead_text}</p>
              <p>
                {event.fields.address_city}
                ,
                {event.fields.address_zipcode}
              </p>
              <p className="text-uppercase">
                POUR EN SAVOIR PLUS
                :
                {event.fields.contact_url}
              </p>
              <p className="font-italic">{event.fields.category}</p>
            </div>
          ))}
        </Col>
      </Row>
    );
  }
}

export default List;
