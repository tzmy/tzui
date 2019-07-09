import React from 'react';
import style from './css/tzui.module.css';

class TZcascader extends React.Component{
    handleClick =()=>{
        
    }
    render(){
        
        return(
            <div>
                <div className={style.TZcascader} value = ''>
                    <div className={style.TZcascaderWrap} onClick={this.handleClick}></div>
                </div>
            </div>
        )
    }
}
export default TZcascader;