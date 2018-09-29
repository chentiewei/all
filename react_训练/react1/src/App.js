import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            show:0,
            username2:'',
            password2:''
        };
    };
    handleChange(name,event) {
        var newState = {};
        newState[name] = event.target.value;
        console.log(newState)
        this.setState(newState);
    };
    showed(){
       this.setState({show:!this.state.show});
    }
    submitFun() {
      if(!this.state.password||!this.state.username){
        alert('请填写完相应属性')
        return ;
      }
        this.setState({username2:this.state.username,password2:this.state.password,password:'',username:''},function(){
            console.log(this.state);
        });
    };
  render() {
    return (
      <div className="App">
        <div>表单提交</div>
          <div>
              <input type="text"  name="username" value={this.state.username} onChange={this.handleChange.bind(this,'username')}/>
          </div>
          <div>
              <input type="password"  name="password" value={this.state.password} onChange={this.handleChange.bind(this,'password')}/>
          </div>
          <div>
              <button type="primary" onClick={this.submitFun.bind(this)}>提交</button>
          </div>
          这是一个悲伤的故事谁都猜不到应该怎么办，学习react是在一个夜黑风高的夜晚，希望大家谨慎学习.
          <button  onClick={this.showed.bind(this)}>点一下，我偷偷的告诉你 他刚刚输了什么。</button>
          <div style={{display: this.state.show ? "block" : "none"}}>
            账号：{this.state.username2}
          </div>
          <div style={{display: this.state.show ? "block" : "none"}}>
            密码：{this.state.password2}
          </div>
      </div>
    );
  }
}

export default App;
