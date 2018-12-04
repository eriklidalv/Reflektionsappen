import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
//import reflectionsReducer from '../reducers/reflections';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ()=>{
  const store = createStore(
    combineReducers({
      //reflections:reflectionsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};

// thunk
// It provides a third-party extension point between dispatching an action, 
// and the moment it reaches the reducer. 
// People use Redux middleware for logging, crash reporting, 
// talking to an asynchronous API, routing, and more.