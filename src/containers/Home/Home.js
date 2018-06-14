import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Category from '../Category/Category';
import Login from '../Login/Login';
import LocalData from '../../data/LocalData';
import {registerUserAction} from "../../actions";
import { bindActionCreators } from 'redux';

class Home extends Component {
	render (){
		return this.props.isVerified ? <Category /> : <Login />
	}
	componentDidMount(){
		this.props.onRegisterUser(LocalData.getItem(LocalData.fields.VERIFIED_USER));
	}
}

const MapStateToProps = state => ({
	isVerified: !!state.verifiedUser
});

function matchDispatchToProps (dispatch) {
	return bindActionCreators({
		onRegisterUser: registerUserAction
	}, dispatch)
}

export default connect(MapStateToProps, matchDispatchToProps)(Home);