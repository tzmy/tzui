import React from 'react';
import TZbutton from './ui/TZbutton';
import TZinput from './ui/TZinput';
import './App.css';

class App extends React.Component{
  fn = () => {
    alert(2)
  }
  render(){
    return (
      <div className="App">
        <TZbutton>点击登录注册</TZbutton>
        <TZbutton type="primary" >点击登录注册</TZbutton>
        <TZbutton type="dashed" >点击登录注册</TZbutton>
        <TZbutton type="danger" onClick={this.fn}>点击登录注册</TZbutton>
        <TZbutton type="primary" disabled>点击登录注册</TZbutton>
        <TZbutton type="link" href='http://www.baidu.com' target='_blank'>link</TZbutton>
        <TZbutton type="link" disabled href='http://www.baidu.com'>百度</TZbutton>
      </div>
    );
  }
}

export default App;
