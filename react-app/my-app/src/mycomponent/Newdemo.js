import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Newdemo extends Component {
    
    myFun(){
        var container=document.getElementById("myID");
        var element=<h1>My Name is Forhad I am from ReactDom</h1>
        var calback=function(){
                alert("Hi I am callback")
        }

        ReactDom.render(element,container,calback);
    }

    render() {
        return (
            <div>
                <button onClick={this.myFun}>Change</button>
                <h1 id="myID">My Name is osman</h1>
            </div>
        );
    }
}

export default Newdemo;