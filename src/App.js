import React from 'react';
import arrow from './arrow.svg';
import { ReactComponent as Arrow } from './arrow.svg'
import { ReactComponent as Reset } from './reset.svg'
import './App.scss';

function App() {
  return (
  <div class="top">
    <Arrow/>
    <Reset/>
  </div>
  );
}

export default App;
