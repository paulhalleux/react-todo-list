import React from 'react';
import { render } from 'react-dom';

import App from './App';

const mountPoint = document.querySelector('#root');

render(<App/>, mountPoint);