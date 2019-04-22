import React, { Component } from 'react';
import './styles/foundation.min.css';
import './styles/custom.css';
import Routes from './routes'
import Header from './components/Header/Header';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      appName: 'Blog App'
    }
  }

  render() {
    return (
    <div>
      <Header name={ this.state.appName } />
      <Routes />
    </div>
    );
  }
}

export default App;
