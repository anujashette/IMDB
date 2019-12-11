import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import movieReducer from './reducres/movie.reducer';
import createSagaMiddleware from 'redux-saga';
import { watchFetch } from './sagas/movie.saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(movieReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFetch)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

module.hot.accept();