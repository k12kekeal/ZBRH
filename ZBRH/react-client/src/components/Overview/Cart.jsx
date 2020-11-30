import React from 'react';
import {Container, Row, Col} from 'react-bootstrap/';

const Cart = ({currentSku, currentStyle, skuSelect}) => {

  var quantity = [];
  if (currentSku) {
    for (var i = 0; i <= Math.min(currentSku.quantity, 15); i++) {
      quantity.push(<option key={i} value={i}>{i}</option>);
    }
  }
  return (
    <div>
      {currentStyle ?
        <Container>
          <Row>
            <Col>
              <select
                className="select"
                name="size"
                onChange={e => {
                  e.preventDefault();
                  skuSelect(e.target.value, e);
                }}
              >
                <option value={0}>SELECT SIZE</option>
                {currentStyle.skus ? Object.keys(currentStyle.skus).map((skuNum, index) => (
                  <option
                    key={index}
                    value={skuNum}>
                    {currentStyle.skus[skuNum].size}
                  </option>
                )) : console.log('no skus yet')
                }
              </select>
            </Col>
            <Col xs={4}>
              <select
                className="select"
                name="quantity"
                disabled={!currentSku}>
                <option defaultValue="">-</option>
                {currentSku !== 0 ? quantity : null}
              </select>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <div>
                <button className='add-to-cart'>Add to Cart</button>
              </div>
            </Col>
            <Col xs={2}>
              <button className='add-to-cart'>☆</button>
            </Col>
          </Row>
        </Container>
        : null}
    </div>
  );
};

export default Cart;
