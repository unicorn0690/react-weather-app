import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'

export default class Examples extends Component {
	render () {
		return (
			<div>
				<h1 className='text-center'>Examples</h1>
				<p>Here are few examples to try it out:</p>
				<ol>
					<li>
						<Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
					</li>
					<li>
						<Link to='/?location=Kalyan'>Kalyan, KYN</Link>
					</li>
				</ol>
			</div>
		)
	}
}
