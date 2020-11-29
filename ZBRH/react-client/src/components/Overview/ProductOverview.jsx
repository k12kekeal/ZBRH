import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductOverview = ({ currentProduct }) => {
  return (
    <Container>
      <Row>
        <Col lg={1}></Col>
        <Col lg={6}>
          {currentProduct.slogan ? <h5>{currentProduct.slogan}</h5> : null}
          {currentProduct.description ? <small>{currentProduct.description}</small> : null}
        </Col>
        <Col lg={4}>
          <div className='product-features'>
            {currentProduct.features ? currentProduct.features.map((feature, i) => (
              <ul key={i}>✓ <small><b>{feature.feature}</b>: {feature.value ? feature.value : null}</small></ul>
            )) : null}
          </div>
        </Col>
        <Col lg={1}></Col>

      </Row>
    </Container>
  );
};

export default ProductOverview;