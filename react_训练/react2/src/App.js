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
  activateLasers (){
    alert('随便写的')
  }
  Welcome () {
    return <button onClick={this.activateLasers}>Activate Lasers</button>
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>Seconds:{this.state.seconds}{this.Welcome()}</div>
    );
  }
}

export default App;
