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
    this.setState({
      currentSku: this.props.currentStyle.skus[sku]
    }, console.log(this.state));
  }

  render() {
    var quantity = [];
    for (var i = 0; i < Math.min(this.state.currentSku.quantity, 15); i++) {
      quantity.push(<option key={i} value={i}>{i}</option>);
    }
    return (
      <div>
        <button>Add to Cart</button>
        <select
          className="select"
          name="size"
          onChange={e => {
            e.preventDefault();
            this.skuSelect(e.target.value, e);
          }}
        >
          <option defaultValue="">SELECT SIZE</option>
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
          disabled={this.state.currentSku === 0}>
          <option defaultValue="">-</option>
          {this.state.currentSku ? quantity : null}
        </select>

      </div>
    );
  }
}

export default Cart;
