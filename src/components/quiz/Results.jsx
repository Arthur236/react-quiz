import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import $ from 'jquery';

class Results extends Component {
	render() {
		var percent = (this.props.score / this.props.questions.length * 100);

		if(percent > 80){
			var message = 'Awesome Job!';
		} else if(percent < 80 && percent > 60){
			var message = 'You did ok!';
		} else {
			var message = 'You could do better!';
		}

		return (
			<div className="well">
				<h4>You got {this.props.score} out of {this.props.questions.length} correct</h4>
				<h1>{percent}% - {message}</h1>
				<hr/>
				<a href="/">Try again</a>
			</div>
		);
	}
}

export default Results;
