import React from 'react';

function Hello(props){

    function DoThis(){
        alert("Button is cliecked");
    }

    return(
        <div>
            <button onClick={DoThis}>Click Me</button>
            <h1>Name: {props.name} And Age: {props.age}</h1>
        </div>
    );
}

export default Hello;