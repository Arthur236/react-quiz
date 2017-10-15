import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import $ from 'jquery';
import logo from '../logo.svg';
import QuestionList from './quiz/QuestionList.jsx';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: [
				{
					id: 1,
					text: 'What is your name?',
					choices: [
						{
							id: 'a',
							text: 'Michael'
						},
						{
							id: 'b',
							text: 'Michelle'
						},
						{
							id: 'c',
							text: 'Brice'
						},
						{
							id: 'd',
							text: 'Brianna'
						},
					],
					correct: 'd'
				},
				{
					id: 2,
					text: 'What is your car\'s model?',
					choices: [
						{
							id: 'a',
							text: 'Lamborghini'
						},
						{
							id: 'b',
							text: 'Porsche'
						},
						{
							id: 'c',
							text: 'Chevrolet'
						},
						{
							id: 'd',
							text: 'Mustang'
						},
					],
					correct: 'c'
				},
				{
					id: 3,
					text: 'What is your favorite movie franchise?',
					choices: [
						{
							id: 'a',
							text: 'The Fast and the Furious'
						},
						{
							id: 'b',
							text: 'Star Wars'
						},
						{
							id: 'c',
							text: 'Divergent'
						},
						{
							id: 'd',
							text: 'Harry Potter'
						},
					],
					correct: 'b'
				},
				{
					id: 4,
					text: 'What is your favorite game?',
					choices: [
						{
							id: 'a',
							text: 'God of War 4'
						},
						{
							id: 'b',
							text: 'Forza Horizon'
						},
						{
							id: 'c',
							text: 'Nier Automata'
						},
						{
							id: 'd',
							text: 'FIFA 18'
						},
					],
					correct: 'a'
				},
			],
			score: 0,
			current: 1
		}
	}

	render() {
		return (
			<div>
				<QuestionList {...this.state} />
			</div>
		);
	}
}

export default App;
