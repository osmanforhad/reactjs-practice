import React,{Component} from 'react';


class Stateexample extends Component{

    constructor(){
        super()

        this.state={
            name:"osman gani forhad",
            age:["27","30", "60","70"],
            height:"5 feet 6 inch",
            weight: {
                class7: ["27","30", "60","70"],
                class8: "43",
                class9: "48"
            }
        }
    }

render(){
    return <div>
<h1>My Name is: {this.state.name}</h1>
<h1>My Age is: {this.state.age[2]}</h1>
<h1>My Height is: {this.state.height}</h1>
<h1>My Weight is: {this.state.weight.class7[1]}</h1>
    </div>
}

}

export default Stateexample;