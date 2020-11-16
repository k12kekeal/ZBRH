import React from "react";
import { Card, Carousel } from 'react-bootstrap';

class RelatedProduct extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div>Hi this is an  RelatedProduct


      <Card style={{ width: '18rem' }} id="card" className="acard">
        <Card.Body id="cardbody">
          <Card.Title id="cardtitle">
          </Card.Title>
          <Card.Text id="cardtext">
            CATEGORY
            </Card.Text>
            lots of text...
          </Card.Body>
      </Card>


    </div>)
  }
}



export default RelatedProduct;