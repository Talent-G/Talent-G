import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import students from '../reducers/students';

const reducer = combineReducers({
  students,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
