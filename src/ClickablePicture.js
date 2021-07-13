import React, { Component } from 'react'

export default class ClickablePicture extends Component {

    state = {
        clickablePicture: true,
      }

    clickablePictureHandler = () => {
        this.setState(state => ({
          clickablePicture: !state.clickablePicture
        }))
      }
      
    render() {
        return (
            <div>
            <img onClick={this.clickablePictureHandler} src={this.state.clickablePicture ? this.props.img : this.props.imgClicked} alt="clickable" witdh="200px"/>
            </div>
        
        )
    }
}