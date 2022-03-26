import { render } from 'react-dom';
import React from 'react';
import App from './App';

const mountPoint = document.querySelector('#root');

render(<App/>, mountPoint);