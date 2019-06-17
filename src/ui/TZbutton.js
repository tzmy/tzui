import React from 'react';
import './css/tzui.css';
class TZbutton extends React.Component{
    constructor(props) {
        super(props);
        this.linkFlag= this.props.type=='link'?true:false;
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick =()=>{
        if(this.linkFlag){
           window.open(this.props.href);
        }else{
           this.props.onClick();
        }
    }
    render(){
        var type =' TZbutton '+this.props.type;
        var disabled = this.props.disabled?'disabled':'';
        return(
            <button className={type} disabled={disabled} href={this.props.href} onClick={this.handleClick}>{this.props.children} </button>
        )
        
    }
}
export default TZbutton ;