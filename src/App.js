import React, { Component } from 'react';
import './App.css';
import Board from './Board';

class App extends Component {
	render(){
		return (
			<div>
			<Board height={this.props.height} size={this.props.size}/>
			<h1>Hello</h1>
			</div>

		);
	}
}

export default App;
