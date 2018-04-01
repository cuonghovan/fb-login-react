import React from "react";

class ClickCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };

    this.updateCount = this.updateCount.bind(this);
  }

  updateCount() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div className="login">
        <h1>Count: </h1>
        <h3>{this.state.count}</h3>
        <button onClick={this.updateCount}>Increase by 1</button>
      </div>
    );
  }
}

export default ClickCount;
