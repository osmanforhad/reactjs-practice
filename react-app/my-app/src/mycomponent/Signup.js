import React, { Component } from 'react';

class Signup extends Component {


    constructor(){
        super();

        this.state={
            fname:" ",
            lname:" ",
            email:" ",
            mobile:" "
        }
    }


    onChangeHandler=(event)=>{
        var inputName=event.target.name;
        var inputValue=event.target.value;

        this.setState({[inputName]:inputValue});
    }

    render() {
        return (
            <div>
                <p>First Name: {this.state.fname}</p>
                <p>Last Name: {this.state.lname}</p>
                <p>Email: {this.state.email}</p>
                <p>Mobile No: {this.state.mobile}</p>
                <form>
                    <input type="text" name="fname" placeholder="first name" onChange={this.onChangeHandler}></input>
                    <br></br>
                    <input type="text" name="lname" placeholder="last name" onChange={this.onChangeHandler}></input>
                    <br></br>
                    <input type="email" name="email" placeholder="email" onChange={this.onChangeHandler}></input>
                    <br></br>
                    <input type="text" name="mobile" placeholder="mobile" onChange={this.onChangeHandler}></input>
                    <br></br>
                    <input type="submit" name="submit" value="Save Now"></input>   
                </form>
            </div>
        );
    }
}

export default Signup;