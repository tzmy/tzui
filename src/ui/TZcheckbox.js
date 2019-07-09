import React from 'react';
import './css/tzui.css';
class TZcheckbox extends React.Component{
    constructor(props) {
        super(props);
        this.linkFlag= this.props.type=='link'?true:false;
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick =()=>{
        if(this.linkFlag){
           
        }else{
            if(this.props.onClick){
                this.props.onClick();
            }
        }
    }
    render(){
        var type =' checkboxInner ';
        var disabled = this.props.disabled?'disabled':'';
        return(
            <label className='checkboxlabel'>
                <input type="checkbox"  className='TZcheckbox' disabled={disabled} 
                onClick={this.handleClick} value = {this.props.children} name={this.props.name} />
                <span className={type}></span>
                <span className='innertext'>{this.props.children}</span>
            </label>
        )
        
    }
}
export default TZcheckbox ;