import React,{Component} from 'react';

class Changestate extends Component{


    constructor(){
        
        super()

        this.state={
            name:"osman"
        }
    }

    changeName(a){
        this.setState({name:a})
    }


    render(){
        return <div>
    <h1>{this.state.name}</h1>
    <button onClick={this.changeName.bind(this,"forhad")}>Change Name</button>
        </div>
    }

}

export default Changestate;