import React, { Component, Fragment } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../Home/Home.js'
import Login from '../Login/Login.js'
import Category from '../Category/Category.js'
import SubCategory from '../SubCategory/SubCategory.js'
import Profile from '../Profile/Profile.js'
import Party from '../Party/Party.js'

class App extends Component {
  render() {
    return (
		<Router>
			<Fragment>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/category" component={Category} />
				<Route exact path="/category/:name" component={SubCategory} />
				<Route exact path="/profile" component={Profile} />
				<Route exact path="/party" component={Party} />
			</Fragment>
		</Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {helloworld: state.helloworld}
};

export default connect(mapStateToProps)(App);
