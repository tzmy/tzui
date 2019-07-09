import React from 'react';
import './css/tzui.css';
import style from './css/tzui.module.css';
class TZoption extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="item" onClick={this.handleClick} value={this.props.value}>
                {this.props.children}
            </div>
        )
        
    }
}

export { TZoption }

class TZselect extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            open:false,
            showText:'=请选择=',
            value:''
        }
        
    }

    componentDidMount(){
        
        document.addEventListener('click', (e)=>{
            
            //if(e.target == this.rootRef.current.children[0]){
                
            //    console.log(111);
            //   return;
            //};
            this.setState({
                open:false,
                
             });
        });
    };
    handleClick =(e)=>{
    
        e.nativeEvent.stopImmediatePropagation();
        
        this.setState({
           open:!this.state.open
        });
    };

    onSet = (el) => {
        console.log(el.props.value);
        this.setState({
            value:el.props.value,
            showText:el.props.children
         });
    }
    render(){
        const { open,value,showText } = this.state;
        
        
        return(
            <div className={style.selShow} value = {value}>
                <div className={style.selWrap} onClick={this.handleClick}>{showText}</div>
                <ul className={style.select} open={open} >
                    {
                        React.Children.map(this.props.children.filter(function(item){
                            return item.type&& item.type.name == 'TZoption';
                        }),(el)=>{
                            return <li onClick={()=>this.onSet(el)}>{el}</li>
                        })
                    }

                </ul>
            </div>
        )
        
        
    }
}

export default TZselect ;