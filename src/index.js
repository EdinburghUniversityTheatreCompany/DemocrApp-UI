import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/bootstrap/js/bootstrap.min.js';
import Landing from './Landing';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Landing />, document.getElementById('root'));
registerServiceWorker();
