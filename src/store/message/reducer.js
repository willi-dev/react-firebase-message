const initialState = {
  message: [],
  fetching: false,
  fetched: false,
  error: null
}

const reducer = (state = initialState, action ) => {
  switch( action.type ){
    case 'FETCH_MESSAGES': {
      return {
        ...state,
        fetching: true
      }
    }
    case 'FETCH_MESSAGES_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        message: action.payload
      }
    }
    case 'FETCH_MESSAGE_REJECTED': {
      return {
        ...state,
        fetching: false, 
        error: action.payload
      }
    }
    default:{
      return state;
    }
  }
}

export default reducer;