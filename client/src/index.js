//import React
import React from 'react';
import ReactDOM from 'react-dom';
//import Provider
import { Provider } from "./Context";
//importing css
import './index.css';
import './global.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

//Render all elements

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
