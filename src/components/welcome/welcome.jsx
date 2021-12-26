import React, { Component } from 'react'

export class Welcome extends Component {

    constructor(props) {
      super(props)
      this.name = null
    }
  
    render() {
      return <div>
        <h1>Bonjour {this.name ? this.name : <input type='text'></input>}</h1>
        <p>{this.props.children}</p>
      </div>
    }
  }