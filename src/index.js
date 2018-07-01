import React from 'react';
import ReactDOM from 'react-dom';
import MaterialAdmin from './materialAdmin';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MaterialAdmin />, document.getElementById('root'));

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./materialAdmin.js', () => {
    const NextApp = require('./materialAdmin').default;
    ReactDOM.render(<NextApp />, document.getElementById('root'));
  });
}
registerServiceWorker();
