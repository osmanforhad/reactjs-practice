import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Anotherdemo extends Component {


    changeImg(){
       var imgID = document.getElementById("imgID");
       ReactDom.findDOMNode(imgID).src="https://www.channelionline.com/wp-content/uploads/2021/05/118456023_mediaitem118456019-750x430.jpg"
    }

    render() {
        return (
            <div>
                <button onClick={this.changeImg}>change image</button><br></br>
                <img id="imgID" src="https://www.channelionline.com/wp-content/uploads/2021/05/Untitled-1-84.jpg"></img>
            </div>
        );
    }
}

export default Anotherdemo;