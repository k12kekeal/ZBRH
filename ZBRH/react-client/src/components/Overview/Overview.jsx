import React from "react";
import axios from "axios";

import Rating from "@material-ui/lab/Rating";
import Select from "@material-ui/core/Select";

import Cart from "./Cart.jsx";
import StyleSelector from "./StyleSelector.jsx";
import ImageGallery from "./ImageGallery.jsx";
import ProductOverview from "./ProductOverview.jsx";

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
      currentStyle: {},
    };
    this.getStyles = this.getStyles.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
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

  componentDidMount() {
    this.getStyles(this.props.currentProduct.id);
  }
  changeStyle(productId, e) {
    e.preventDefault();
    this.setState({
      currentStyle: this.state.styles[productId],
    });
  }

  render() {
    return (
      <div>
        <Rating
          id="product-overview-rating"
          name="quarter-rating"
          value={this.props.value}
          defaultValue={4}
          precision={0.25}
          readOnly
        />
        {this.props.reviews.length && (
          <a href="#ratings-and-reviews">Read all [#] reviews</a>
        )}
        {/* TODO: render review number dynamically*/}
        <StyleSelector
          changeStyle={this.changeStyle}
          currentProduct={this.props.currentProduct}
          currentStyle={this.state.currentStyle}
          styles={this.state.styles}
        />
        <div>
          <Cart />
          {/* TODO: fave button */}
          <ProductOverview currentProduct={this.props.currentProduct} />
        </div>
      </div>
    );
  }
}

export default Overview;
