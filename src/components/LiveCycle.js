import React, { Component } from 'react';

class LiveCycle extends Component {
  constructor() {
    super()
    this.state = {
      tick: 100
    }
  }

  componentDidMount() {
    this.timeID = setInterval(
      () => this.tick(),
      60
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let oldTick = this.state.tick
    oldTick ?
      this.setState({
        tick: oldTick - 1
      })
    :
      this.setState({
        tick: 100
      })
  }

  render() {
    return (
      <div className="container">
        <p>Тик: {this.state.tick}</p>
      </div>
    )
  }
}

export default LiveCycle;
