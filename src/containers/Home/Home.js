import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Category from '../Category/Category';
import Login from '../Login/Login';

class Home extends Component {
	constructor(){
		super();
	}
	render (){
		const {isVerified} = this.props;
		return !!isVerified ? <Category /> : <Login />
	}
}

const MapStateToProps = state => ({
	isVerified: state.user
});

export default connect(MapStateToProps)(Home);