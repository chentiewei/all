import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    seconds: 1
  }
  tick = () => {
    const { seconds } = this.state;
    this.setState({
      seconds: new Date().toLocaleTimeString()
    })
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>Seconds:{this.state.seconds}</div>
    );
  }
}

export default App;
