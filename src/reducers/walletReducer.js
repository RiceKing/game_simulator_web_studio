const walletReducer = function(state = 200, action) {
  switch (action.type) {
    case 'PROFIT_WALLET_BTC':
      return state + action.btc;

    case 'COST_WALLET_BTC':
      return state - action.btc

    case 'GET_WALLET_BTC':
      return state;

    default:
      return state;
  }
}

export default walletReducer;
