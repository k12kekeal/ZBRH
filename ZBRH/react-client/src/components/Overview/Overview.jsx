import React from 'react';
import Rating from '@material-ui/lab/Rating';
import StyleSelector from './StyleSelector.jsx';
import Select from '@material-ui/core/Select';
import ImageGallery from './ImageGallery.jsx';
import Cart from './Cart.jsx';
import styleData from '../../exampleStyleData.js';
import ProductOverview from './ProductOverview.jsx';

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

  getStyles(productId, e) {
    e.preventDefault();
    axios
      .get(`http://3.21.164.220/${productId}/styles`)
      .then(
        (response) =>
          this.setState({
            styles: response.data.results,
            currentStyle: response.data.results[1],
          }),
        console.log(response.data.results)
      )
      .catch((err) => console.log(err));
  }

  changeStyle(productId, e) {
    e.preventDefault();
    this.setState(
      {
        currentStyle: this.state.styles[productId],
      }
    );
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
          <select name="size">
            <option defaultValue="">SELECT SIZE</option>
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
          </select>
          <select name="quantity">
            {/* TODO: for loop to create an option for each quantity? */}
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <Cart />
          {/* TODO: fave button */}
          <ProductOverview currentProduct={this.props.currentProduct} />
        </div>
      </div>
    );
  }
}

export default Overview;
