import React, { Component } from 'react';
import { connect } from 'react-redux';
import { profitWallet, costWallet, getWallet } from '../actions'
import DateFormatCycle from './DateFormatCycle.js'
import WalletBTC from './WalletBTC.js'

class liveCycle extends Component {
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
    this.props.costWallet(1)
    this.setState({
      tick: oldTick + 1
    })
  }

  render() {
    return (
      <div className="container">
        <DateFormatCycle day={this.state.tick} />
        <WalletBTC btc={this.props.btc}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    btc: state.walletState
  }
}

function mapDispatchToProps(dispatch) {
  return {
    costWallet: (btc) => dispatch(costWallet(btc)),
    getWallet: (btc) => dispatch(getWallet(btc))
  }
}

const LiveCycle = connect(
  mapStateToProps,
  mapDispatchToProps
)(liveCycle)

export default LiveCycle;
