import firebase from '../../services/fbConfig';
import _ from 'lodash';

const getData = values => {
  let messagesVal = values;
  let messages = _(messagesVal)
                  .keys()
                  .map( messageKey => {
                    let cloned = _.clone(messagesVal[messageKey]);
                    cloned.key = messageKey;
                    return cloned;
                  })
                  .value();
  return messages;
}

const dispatchStateToProps = dispatch => {
  return {
    // fetch users
    fetchMessages: () => {
      let messageData = firebase.database().ref('/messages').orderByKey();
      messageData.on( 'value', snapshot => {
        dispatch({type: 'FETCH_MESSAGES_FULFILLED', payload: getData( snapshot.val() )});
      });
    },

    addMessage: (msg) => {
      let addValue = firebase.database().ref('/messages');
      addValue.push({
        message: msg
      });
    }
  }
}

export default dispatchStateToProps;