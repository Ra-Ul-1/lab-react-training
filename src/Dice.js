import React, { Component } from 'react'

export default class Dice extends Component {

    state = {
        // dicePicture: true,
        imageIndex: Math.ceil(Math.random() * 6)
      }

    dicePictureHandler = () => {
        this.setState(state => ({
            imageIndex: 0
        }))
        setTimeout(() => {
            this.setState(state => ({
                imageIndex: Math.ceil(Math.random() * 6) 
            }))
        }, 1000)
      }

    // randomDice = () => {
    //     console.log("img" + Math.ceil(Math.random() * 6))
    // }
      
    render() {
        let images = [
            '/img/dice-empty.png',
            '/img/dice1.png',
            '/img/dice2.png',
            '/img/dice3.png',
            '/img/dice4.png',
            '/img/dice5.png',
            '/img/dice6.png'
        ]
        return (
            <div>
            {/* <img onClick={this.dicePictureHandler} src={this.state.dicePicture ? this.props.img0 : images[0]} alt="clickable" witdh="500"/> */}
            <img onClick={this.dicePictureHandler} src={images[this.state.imageIndex]} alt="clickable" witdh="500"/>
            </div>
        )
    }
}

