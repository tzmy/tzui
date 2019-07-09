import React from 'react';
import TZbutton from './ui/TZbutton';
import './App.css';
import TZcheckbox from './ui/TZcheckbox';
import TZselect, { TZoption } from './ui/TZselect';
import TZcascader from './ui/TZcascader';

class App extends React.Component{
  fn = () => {
    alert(2)
  }
  render(){
    return (
      <div className="App">
        <div>
          <TZbutton>点击登录注册</TZbutton>
          <TZbutton type="primary" >点击登录注册</TZbutton>
          <TZbutton type="dashed" >点击登录注册</TZbutton>
          <TZbutton type="danger" onClick={this.fn}>点击登录注册</TZbutton>
          <TZbutton type="primary" disabled>点击登录注册</TZbutton>
          <TZbutton type="link" href='http://www.baidu.com' target='_blank'>link</TZbutton>
          <TZbutton type="link" disabled href='http://www.baidu.com'>百度</TZbutton>
        </div>
        <div>
          <TZcheckbox>选择</TZcheckbox>
          <TZcheckbox type="primary">选择</TZcheckbox>
          <TZcheckbox type="dashed">选择</TZcheckbox>
        </div>
        <div>
          <TZselect value='请选择'>
            adsadadasdasfsf
              <a>asdasd</a>
              <TZoption value='1'>AAAA</TZoption>
              <TZoption value='2'>BBBB</TZoption>
              <TZoption value='3'>CCCC</TZoption>
              <TZoption value='4'>DDDDD</TZoption>
              <TZoption value='5'>EEEEE如果很长很长  欧龙 long</TZoption>
          </TZselect>
          </div>
          <div>
          <TZselect value='请选择'>
              <TZoption value='1'>AAAA</TZoption>
              <TZoption value='2'>BBBB</TZoption>
              <TZoption value='3'>CCCC</TZoption>
              <TZoption value='4'>DDDDD</TZoption>
              <TZoption value='5'>EEEEE如果很长很长  欧龙 long</TZoption>
          </TZselect>
        </div>
        <div>
          <TZcascader></TZcascader>
        </div>
      </div>
      
    );
  }
}

export default App;
