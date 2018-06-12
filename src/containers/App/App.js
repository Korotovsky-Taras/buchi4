import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1> {this.props.helloworld} </h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {helloworld: state.helloworld}
}

export default connect(mapStateToProps)(App);
