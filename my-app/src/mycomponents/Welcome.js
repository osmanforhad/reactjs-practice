import React,{Component} from 'react';

class Welcome extends Component{
render(){
    return <h1>I am from {this.props.city} and i live in {this.props.district}</h1>
}
}

export default Welcome;