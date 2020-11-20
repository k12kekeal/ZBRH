import React from 'react';

// TODO: add to cart button functionality
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    // this.styleClick = this.styleClick.bind(this);
  }

  // styleClick() {
  //   this.setState({
  //     currentSku: 0
  //   });
  // }

  render() {
    return (
      <div>
        <button>Add to Cart</button>
        <select className="select" name="size">
          <option defaultValue="">SELECT SIZE</option>
          {this.props.currentStyle.skus ? Object.values(this.props.currentStyle.skus).map(sku => (
            <option>{sku.size}</option>
          )) : console.log('no skus yet')
          }
        </select>
        <select className="select" name="quantity">
          {/* TODO: render quantity dropdown up to either 15 or available stock of selected sku quantity */}
        </select>

      </div>
    );
  }
}

export default Cart;
