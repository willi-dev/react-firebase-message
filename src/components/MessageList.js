import React, { Component } from 'react';
import Message from './Message';
// import _ from 'lodash';

class MessageList extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      messages: []
    };
  }

  render() {
    let messageNodes = this.props.msg.map( (message) => {
      return (
        <div key={message.key} className="card">
          <div className="card-content">
            <Message message={message.message} />
          </div>
        </div>
      )
    });
    return(
      <div>
        {messageNodes}
      </div>
    );
  }

}

export default MessageList;