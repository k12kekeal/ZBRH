import React from "react";
import { Card } from 'react-bootstrap';

class ProductComparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }
  handleClick() {
    this.setState(state => ({
      count: state.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <header id="nocard">RELATED PRODUCTS</header>
        <Card style={{ width: '18rem' }} id="card" className="acard">
          <Card.Body id="cardbody">
            <Card.Title id="cardtitle">
            </Card.Title>
            <Card.Text id="cardtext">
              CATEGORY
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }

}


// class ProductComparison extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   componentDidMount() {
//     document.title = `You clicked ${this.state.count} times`;
//   }
//   componentDidUpdate() {
//     document.title = `You clicked ${this.state.count} times`;
//   }
//   handleClick() {
//     this.setState(state => ({
//       count: state.count + 1,
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={this.handleClick}>
//           Click me
//         </button>
//       </div>
//     );
//   }

// }

export default ProductComparison;