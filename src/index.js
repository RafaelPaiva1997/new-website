import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Package from './Components/Top/Package';
import './Fonts/Fonts.css';
import './index.css';

ReactDOM.render(<Package />, document.getElementById('root'));

serviceWorker.unregister();
