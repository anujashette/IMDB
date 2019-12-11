import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { initializeFirebase } from './Middleware/push-notification';

// ReactDOM.render(
//   <div>{title}</div>,
//   document.getElementById('root')
// );

ReactDOM.render(<App />, document.getElementById('root'));

initializeFirebase();
serviceWorker.unregister();
module.hot.accept();
