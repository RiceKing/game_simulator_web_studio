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
          <h3>Resumes</h3>
          <ResumesList count={5}/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
