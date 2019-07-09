import React from 'react';
import style from './css/tzui.module.css';

class TZinput extends React.Component{
    
    render(){
        return(
            
            <input type={this.props.type} className={style.TZinputText} />
        )
    }
}
export default TZinput;