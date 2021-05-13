import React from 'react';

function Hello(props){

    function DoThis(a){
        alert(a);
    }

    return(
        <div>
            <button onClick={DoThis.bind(this,"Hello i am from pera...")}>Click Me</button>
            <h1>Name: {props.name} And Age: {props.age}</h1>
        </div>
    );
}

export default Hello;