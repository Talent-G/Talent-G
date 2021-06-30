const initialState = {
  'message': '',
  'content': {
    'id': 0,
    'firstName': '',
    'lastName': '',
    'email': '',
    'location': '',
    'summary': '',
    'training': {
      'id': 0,
      'trainingName': '',
      'status': true,
      'initialDate': '',
      'finalDate': '',
    },
  },
  'status': '',
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'CHANGE_PROFILE_INFO':
      return {
        ...state,
        content: payload,
      };
    case 'FETCH_USER_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        payload,
      };
    case 'FETCH_USER_FAILURE':
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}

