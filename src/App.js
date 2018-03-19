import React, { Component } from 'react';
import {connect} from 'react-redux';
import mapStateToProps from './store/message/mapStateAction';
import dispatchStateToProps from './store/message/dispatchStateAction';
import Header from './components/Header';
import MessageBox from './components/MessageBox';
import MessageList from './components/MessageList';
// import firebase from './services/fbConfig';

class App extends Component {
  
  componentWillMount() {
    this.props.fetchMessages();
  }

  render() {
    console.log( this.props );
    console.log( this.props.msg )
    return (
      <div className="container">
        <Header title="Simple Firebase App"/>
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageList msg={this.props.msg}/>
          </div>
        </div>
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageBox/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, dispatchStateToProps)(App);