import React,{Component} from 'react';

class Welcome extends Component{

     doThisFromClass(){
        alert("Button is clicked from class");
    }

render(){
    return <div>
        <button onClick={this.doThisFromClass}>Click Me From Class</button>
        <h1>I am from {this.props.city} and i live in {this.props.district}</h1>
    </div>  
}
}

export default Welcome;