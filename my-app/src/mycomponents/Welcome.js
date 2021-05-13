import React,{Component} from 'react';

class Welcome extends Component{

     doThisFromClass(a){
        alert(a);
    }

render(){
    return <div>
        <button onClick={this.doThisFromClass.bind(this,"I am from para..")}>Click Me From Class</button>
        <h1>I am from {this.props.city} and i live in {this.props.district}</h1>
    </div>  
}
}

export default Welcome;