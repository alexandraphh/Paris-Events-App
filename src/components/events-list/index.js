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
    axios.get('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&lang=fr')
      .then((res) => {
        this.setState({ events: res.data.records });
      });
  }

  render() {
    const { events } = this.state;
    return (
      <Row>
        <Col>
          <h2 className="text-center text-uppercase font-weight-bold m-3">Liste des évènements</h2>
        </Col>
        <div>
          {events.map((event) => (
            <div key={event.fields.id}>
              {event.fields.title}
              <img src={event.fields.cover_url} alt="" />
            </div>
          ))}
        </div>
      </Row>
    );
  }
}

export default List;
