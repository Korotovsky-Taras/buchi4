import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Home extends Component {
	constructor(){
		super();
	}
	render (){
		const {isVerified, match} = this.props;
		return isVerified ? <Category /> : <Login />
	}
}

const MapStateToProps = state => ({
	isVerified: state.isVerifiedUser
});

export default connect(MapStateToProps)(Home);