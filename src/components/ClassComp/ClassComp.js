import React, {Component} from 'react';
import './ClassComp.css';
import FunctionalComp from '../FunctionalComp/FunctionalComp';
import Buttons  from '../Buttons/Buttons';

class ClassComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            counter:0
            
        }
    }
    
    incrementCounter = ()=>{
        this.setState({counter:this.state.counter+1})
    }
    decrementCounter = ()=>{
        this.setState({counter:this.state.counter-1})
    }
    render() {
        const myStyle = {
            backgroundColor:'red'
        }
        return (
            <div className="counterApp">
                <Buttons text="Add" click={this.incrementCounter}></Buttons>
                <FunctionalComp counter={this.state.counter} ></FunctionalComp>
                <Buttons  text="Sub" click={this.decrementCounter}></Buttons>
            </div>
        )
    }
}



export default ClassComp;
