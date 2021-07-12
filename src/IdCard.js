import React, { Component } from 'react';


export default class IdCard extends Component {
    render() {
        return (
            // play with HTML tags and console log
            <div>
            <p><b>First name:</b> {this.props.firstName}</p>
            <p><b>Last name:</b> {this.props.lastName}</p>
            <p><b>Gender:</b> {this.props.gender}</p>
            <p><b>Height:</b> {this.props.height}</p>
            {/* <p><b>Birth:</b> {this.props.birth}</p> */}
            <img src={this.props.picture} style={{ width: '200px'}} />
            </div>
    )
    }
} 

