import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game'

import './index.css';
import store from './store'
import {Provider} from 'react-redux'


const App = () => {
  return (
    <Provider store={store}>
      <Game/>
    </Provider>
    
  )
}



// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
