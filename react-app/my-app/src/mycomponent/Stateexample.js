import React,{Component} from 'react';


class Stateexample extends Component{

    constructor(){
        super()

        this.state={
            name:"osman gani forhad",
            age:"27",
            height:"5 feet 6 inch",
            weight: "56 kg"
        }
    }

render(){
    return <div>
<h1>My Name is: {this.state.name}</h1>
<h1>My Age is: {this.state.age}</h1>
<h1>My Height is: {this.state.height}</h1>
<h1>My Weight is: {this.state.weight}</h1>
    </div>
}

}

export default Stateexample;