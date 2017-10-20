import React, { Component } from 'react';
import './App.css';
import Board from './Board';

class App extends Component {
	render(){
		return (
			<Board height={this.props.height} size={this.props.size}/>
		);
	}
}

export default App;
