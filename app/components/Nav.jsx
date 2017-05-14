import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'

export default class Nav extends Component {

    onSearch = (e) => {
        e.preventDefault()
        console.log(this.refs.location.value)
    }

    render() {
    return (
    	<div className='top-bar'>
            <div className='top-bar-left'>
                <ul className='menu'>
                    <li className='menu-text'>React Weather App</li>
                    <li>
                        <IndexLink to='/' activeClassName='active' activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
                    </li>
                    <li>
                        <Link to='/about' activeClassName='active' activeStyle={{ fontWeight: 'bold' }}>About</Link>
                    </li>
                    <li>
                        <Link to='/examples' activeClassName='active' activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
                    </li>
                </ul>
            </div>
            <div className='top-bar-right'>
                <form onSubmit={this.onSearch}>
                    <ul className='menu'>
                        <li><input type='search' placeholder='Search Weather' ref='location' /></li>
                        <li><button className='button'>Get Weather</button></li>
                    </ul>
                </form>
            </div>

    	</div>
    )
    }
}
