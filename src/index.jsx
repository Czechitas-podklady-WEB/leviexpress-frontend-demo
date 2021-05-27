import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';
import './style.css';

export const apiBaseUrl = 'http://127.0.0.1:3001/api';

render(<App />, document.querySelector('#app'));
