import React from 'react';
import {
  Col,
  Row,
} from 'react-bootstrap';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      events,
      searchValue,
    } = this.props;
    return (
      <Row>
        <Col>
          <h2 className="text-center text-uppercase font-weight-bold m-3">Liste des évènements</h2>
          {
          events
            .filter((event) => {
              if (searchValue === '') {
                return event;
              }
              return event.fields.title.toLowerCase().includes(searchValue.toLowerCase());
            })
            .map((event) => (
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
            ))
}
        </Col>
      </Row>
    );
  }
}

export default List;
