import React, { Component } from 'react'

export default class Greeting extends Component {
    render() {
        console.log("Hello" + this.props.lang)
        if(this.props.lang == "de") {
            greetingMessage = "Hallo"
        } else if ()
        return (
            <div>
            <h1> {greetingMessage} </h1>    
            </div>
        )
    }
}
