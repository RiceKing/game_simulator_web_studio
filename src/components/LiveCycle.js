import React, { Component } from 'react';

class LiveCycle extends Component {
  constructor() {
    super()
    this.state = {
      tick: 1
    }
  }

  componentDidMount() {
    this.timeID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let oldTick = this.state.tick
    this.setState({
      tick: oldTick + 1
    })
  }

  render() {
    return (
      <div className="container">
        <p>Day: {this.state.tick}</p>
      </div>
    )
  }
}

export default LiveCycle;
