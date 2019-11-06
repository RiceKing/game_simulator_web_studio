export const profitWallet = ( btc ) => ({
  type: 'PROFIT_WALLET_BTC',
  btc
})

export const costWallet = ( btc ) => ({
  type: 'COST_WALLET_BTC',
  btc
})

export const getWallet = () => ({
  type: 'GET_WALLET_BTC'
})
