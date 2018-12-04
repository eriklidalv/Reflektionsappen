import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; // provides the store with all the components it needs
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import LoadingPage from './components/LoadingPage';
import * as serviceWorker from './serviceWorker';
import './index.css';
import './styles/styles.scss';

const store = configureStore();

//By putting the provider below we make it possible for all the components to access the store
const jsx = (
    <Provider store ={store}>
      <AppRouter />
    </Provider>
  );

ReactDOM.render(jsx, document.getElementById('root'));

/*let hasRendered = false;
function renderApp(){
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('root'));
        asRendered= true;
    }
};

//Render the loading page until timeout has finished.
//In the future we will have login verification instead of timeout.
ReactDOM.render(<LoadingPage/>, document.getElementById('root'));
setTimeout(renderApp, 2000);*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

