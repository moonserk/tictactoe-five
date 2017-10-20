import React from 'react';
import './App.css';

export default class Square extends React.Component{
	render(){
		return (
			<button className='Square-border' onClick={this.props.onClick}>{this.props.value}</button>
		);
	}
}