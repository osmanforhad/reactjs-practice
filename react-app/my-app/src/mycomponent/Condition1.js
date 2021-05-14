import React,{Component} from 'react';


class Condition1 extends Component{

    constructor (){
        super()

        this.state={
            login:false
        }
    }

    render(){
        return(
            this.state.login?(
            <h1>I am First</h1>
            )  : (
                <h1>I am Second</h1>
            )
        );
    }
}


export default Condition1;