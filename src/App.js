import React, { Component } from 'react';
import {connect} from 'react-redux';
import mapStateToProps from './store/message/mapStateAction';
import dispatchStateToProps from './store/message/dispatchStateAction';
import Header from './components/Header';
import MessageBox from './components/MessageBox';
import MessageList from './components/MessageList';

class App extends Component {
  
  componentWillMount() {
    this.props.fetchMessages();
    console.log( this.props );
  }

  render() {
    console.log( this.props )
    return (
      <div className="container">
        <Header title="Simple Firebase App"/>
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageList />
          </div>
        </div>
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageBox />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, dispatchStateToProps)(App);