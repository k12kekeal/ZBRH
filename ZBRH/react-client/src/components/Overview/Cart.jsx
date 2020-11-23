import React from 'react';

// TODO: add to cart button functionality
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSku: 0
    };
    this.skuSelect = this.skuSelect.bind(this);
  }

  skuSelect(sku, e) {
    console.log(sku);
    if (sku === 0) {
      this.setState({currentSku: 0});
    } else {
      this.setState({
        currentSku: this.props.currentStyle.skus[sku]
      }, console.log(this.state));
    }
  }

  render() {
    var quantity = [];
    if (this.state.currentSku) {
      for (var i = 0; i <= Math.min(this.state.currentSku.quantity, 15); i++) {
        quantity.push(<option key={i} value={i}>{i}</option>);
      }
    }
    return (
      <div>
        {!this.state.currentSku ?
          <button>Add to Cart</button> :
          <button>Add to Cart</button>}
        <select
          className="select"
          name="size"
          onChange={e => {
            e.preventDefault();
            this.skuSelect(e.target.value, e);
          }}
        >
          <option value={0}>SELECT SIZE</option>
          {this.props.currentStyle.skus ? Object.keys(this.props.currentStyle.skus).map((skuNum, index) => (
            <option
              key={index}
              value={skuNum}>
              {this.props.currentStyle.skus[skuNum].size}
            </option>
          )) : console.log('no skus yet')
          }
        </select>
        <select
          className="select"
          name="quantity"
          disabled={!this.state.currentSku}>
          <option defaultValue="">-</option>
          {this.state.currentSku !== 0 ? quantity : null}
        </select>

      </div>
    );
  }
}

export default Cart;
