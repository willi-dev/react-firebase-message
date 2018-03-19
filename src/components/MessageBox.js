import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../store/message/mapStateAction';
import dispatchStateToProps from '../store/message/dispatchStateAction';
import trim from 'trim';

class MessageBox extends Component {
  
  constructor(props) {
    super(props);
    // this.onChange = this.onChange.bind(this);
    this.onKeyup = this.onKeyup.bind(this);
    // this.state = {
    //   message: ''
    // };
  }

  // onChange(e){
  //   this.setState({
  //     message: e.target.value
  //   });
  // }

  onKeyup(e){
    if(e.keyCode === 13 && trim(e.target.value) !== '' ){
      e.preventDefault();

      // let dbCon = this.props.db.database().ref('/messages');
      // dbCon.push({
      //   message: trim(e.target.value)
      // });

      this.props.addMessage( trim(e.target.value) );

      e.target.value = '';
    }
  }

  render() {
    console.log( this.props );
    return (
      <form>
        <textarea
          className="textarea"
          placeholder="Type a Message"
          cols="100"
          onKeyUp={this.onKeyup}>
        </textarea>
      </form>
    );
  }

}

export default connect(mapStateToProps, dispatchStateToProps)(MessageBox);