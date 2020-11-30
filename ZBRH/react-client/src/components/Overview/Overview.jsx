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
      currentSku: 0,
      expanded: false
    };
    this.getStyles = this.getStyles.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
    this.skuSelect = this.skuSelect.bind(this);
    this.toggleExpanded = this.toggleExpanded.bind(this);
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
    for (var i = 0; i < this.state.styles.length; i++) {
      if (this.state.styles[i].style_id === styleId) {
        this.setState({currentStyle: this.state.styles[i]});
      }
    }
  }

  toggleExpanded(e) {
    this.setState({expanded: !this.state.expanded}, console.log('expanded? ', this.state.expanded));
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <div lg={1}></div>
            <Col lg={this.state.expanded ? 12 : 8}>
              <ImageGallery
                style={{height: 'inherit'}}
                currentStyle={this.state.currentStyle}
                toggleExpanded={this.toggleExpanded}
                expanded={this.state.expanded} />
            </Col>
            <Col lg={4} className={this.state.expanded ? '.d-none' : '.d-block'}>
              <br></br>
              <Rating
                id="product-overview-rating"
                name="quarter-rating"
                value={this.props.avgRating}
                defaultValue={4}
                precision={0.25}
                readOnly
              />
              {this.props.reviewNum > 0 && (
                <a href="#ratings-and-reviews"><small>Read all {this.props.reviewNum} reviews</small></a>
              )}
              <StyleSelector
                changeStyle={this.changeStyle}
                currentProduct={this.props.currentProduct}
                currentStyle={this.state.currentStyle}
                styles={this.state.styles}
              />
              <br></br>
              <Cart
                currentStyle={this.state.currentStyle}
                currentSku={this.state.currentSku}
                skuSelect={this.skuSelect}
              />
              <SocialMedia />
            </Col>
          </Row>
          <Row>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
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
