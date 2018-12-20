import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="container">
        <span className="badge badge-info mr-2">
          {this.props.counter.value}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-outline-info btn-sm "
        >
          +
        </button>
        <button
          className="btn btn-outline-warning btn-sm m-2"
          disabled={this.props.counter.value === 0 ? "disabled" : ""}
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-outline-danger btn-sm m-2"
        >
          X
        </button>
      </div>
    );
  }
}

export default Counter;
