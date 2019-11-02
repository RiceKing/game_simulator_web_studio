import React, { Component} from 'react';
import ErrorBoundary from './ErrorBoundary.js'
import LiveCycle from './LiveCycle.js'
import ResumesList from './ResumesList.js'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Game: Simulator web-studio</h1>
        <ErrorBoundary>
          <LiveCycle />
          <ResumesList />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;