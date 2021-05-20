import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';
import './style.css';

export const apiBaseUrl = 'http://localhost:3001/api';

render(<App />, document.querySelector('#app'));
