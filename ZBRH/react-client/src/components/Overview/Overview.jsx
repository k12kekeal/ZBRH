import React from 'react';
import axios from 'axios';

import Rating from '@material-ui/lab/Rating';
import Select from '@material-ui/core/Select';

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
    console.log(sku);
    if (sku === 0) {
      this.setState({currentSku: 0});
    } else {
      this.setState({
        currentSku: this.state.currentStyle.skus[sku]
      }, console.log(this.state));
    }
  }

  componentDidMount() {
    this.getStyles(this.props.currentProduct.id);
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
        <ImageGallery
          currentStyle={this.state.currentStyle}
        />
        <StyleSelector
          changeStyle={this.changeStyle}
          currentProduct={this.props.currentProduct}
          currentStyle={this.state.currentStyle}
          styles={this.state.styles}
        />
        <SocialMedia />
        <div>
          <Cart
            currentStyle={this.state.currentStyle}
            currentSku={this.state.currentSku}
            skuSelect={this.skuSelect}/>
          <ProductOverview currentProduct={this.props.currentProduct} />
        </div>
      </div>
    );
  }
}

export default Overview;
