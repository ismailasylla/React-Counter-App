import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    const { onDelete, onIncrement, onReset, onDecrement } = this.props;
    return (
      <div>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
        <button
          onClick={onReset}
          className="btn btn-outline-primary btn-sm m-2"
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Counters;
