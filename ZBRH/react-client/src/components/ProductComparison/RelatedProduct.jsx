import React from 'react';
import { Card, Carousel, Button } from 'react-bootstrap';

class RelatedProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { singleRelatedProduct: this.props.singleRelatedProduct };
  }

  render() {
    return (

      <Carousel.Item interval={1000}>

        <Card style={{ width: '18rem' }} id="card" className="acard">
          <Card.Img variant='top' src='./placeHolderImage.jpg' />
          <Card.Body id="cardbody">
            <Card.Title id="cardtitle">{this.state.singleRelatedProduct.category}</Card.Title>
            <Card.Text id="cardtext">
              {this.state.singleRelatedProduct.name} <br></br>
              ${this.state.singleRelatedProduct.default_price}
              <br></br>
              star rating here....
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

      </Carousel.Item>
    );
  }
}


/*
         <Card style={{ width: '18rem' }} id="card" className="acard">
            <Card.Img variant='top' src='./placeHolderImage.jpg' />
            <Card.Body id="cardbody">
              <Card.Title id="cardtitle">{this.state.singleRelatedProduct.category}</Card.Title>
              <Card.Text id="cardtext">
                {this.state.singleRelatedProduct.name} <br></br>
              ${this.state.singleRelatedProduct.default_price}
                <br></br>
              star rating here....
            </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>


*/


export default RelatedProduct;
