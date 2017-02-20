import React, {component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import store from '../store';
import reactCSS from 'reactcss';


class HotOrCold extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			feedback: 'Make Your Guess!'
		}
		
		store.subscribe(() => {
			this.setState({
				feedback: store.getState().feedback
			})
		})
	}

	render() {
		const styles = reactCSS({
			'default': {
				feedbackBox: {
					backgroundColor: '#cc324b',
					padding: '3px',
					width: '350px',
					margin: '0 auto',
				}
			}
		})	

		return (
			<div style={ styles.feedbackBox}>
				<h3>{this.state.feedback}</h3>
			</div>
		);
	}
}


export default HotOrCold;
