import React, { Component} from 'react';
import ErrorBoundary from './ErrorBoundary.js'
import LiveCycle from './LiveCycle.js'
import Resumes from './Resumes.js'
// import WalletBTC from './WalletBTC.js'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Game: Simulator web-studio</h1>
        <ErrorBoundary>
          <LiveCycle />
          <Resumes />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
