import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const COLORS = ['yellow', 'green', 'blue', 'violet', 'pink', 'red']

let cells = document.querySelectorAll('.col');

document.body.className = COLORS[Math.floor(Math.random() * COLORS.length)];

for (let cell of cells) {
  cell.classList.add(COLORS[Math.floor(Math.random() * COLORS.length)])
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
