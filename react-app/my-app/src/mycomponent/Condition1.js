import React,{Component} from 'react';


class Condition1 extends Component{

    constructor (){
        super()

        this.state={
            login:true
        }
    }

    render(){
        if(this.state.login==true){
            return (<button>Logout Button</button>)
        }else{
            return (<button>Login Now</button>)
        }
    }
}


export default Condition1;