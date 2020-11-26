import React from 'react';
import axios from 'axios';

import Rating from '@material-ui/lab/Rating';
import Select from '@material-ui/core/Select';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Cart from './Cart.jsx';
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductOverview from './ProductOverview.jsx';
import SocialMedia from './SocialMedia.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
      currentStyle: {},
      currentSku: 0
    };
    this.getStyles = this.getStyles.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
    this.skuSelect = this.skuSelect.bind(this);
  }

  componentDidMount() {
    this.getStyles(this.props.currentProduct.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentProduct !== prevProps.currentProduct) {
      this.getStyles(this.props.currentProduct.id);
    }
  }

  getStyles(productId) {
    axios.get(`http://3.21.164.220/products/${productId}/styles`)
      .then(response => {
        this.setState({
          styles: response.data.results,
          currentStyle: response.data.results[0]
        });
      });
  }

  skuSelect(sku, e) {
    if (sku === 0) {
      this.setState({currentSku: 0});
    } else {
      this.setState({
        currentSku: this.state.currentStyle.skus[sku]
      });
    }
  }

  changeStyle(styleId, e) {
    e.preventDefault();
    this.setState({
      currentStyle: this.state.styles[styleId],
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <ImageGallery currentStyle={this.state.currentStyle}/>
            </Col>
            <Col xs={3}>
              <Rating
                id="product-overview-rating"
                name="quarter-rating"
                value={this.props.avgRating}
                defaultValue={4}
                precision={0.25}
                readOnly
              />
              {this.props.reviewNum > 0 && (
                <a href="#ratings-and-reviews">Read all {this.props.reviewNum} reviews</a>
              )}
              <StyleSelector
                changeStyle={this.changeStyle}
                currentProduct={this.props.currentProduct}
                currentStyle={this.state.currentStyle}
                styles={this.state.styles}
              />
              <Cart
                currentStyle={this.state.currentStyle}
                currentSku={this.state.currentSku}
                skuSelect={this.skuSelect}
              />
              <SocialMedia />
            </Col>
          </Row>
          <Row>
            <ProductOverview currentProduct={this.props.currentProduct} />
          </Row>
        </Container>

      </div>
    );
  }
}

export default Overview;
