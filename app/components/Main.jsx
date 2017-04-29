import React, { Component } from 'react'
import Nav from './Nav'

export default class Main extends Component {
  render() {
    return (
    	<div>
	        <Nav />
	        <h1>Main Component</h1>
	        {this.props.children}
        </div>
    )
  }
}
