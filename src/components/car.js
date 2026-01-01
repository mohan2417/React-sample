import React from "react";

class Car extends React.Component{
    constructor(){
        super();
        this.state = {color :'black'}
    }

    render(){
        return <>
        <h1>My car is {this.state.color} </h1>
        <button onClick={() => {this.setState({color:"blue"}) }}> change color</button>
        </>
        

    }
}
export default Car;
