import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game'
import {Provider} from 'react-redux'
import store from './store'
import './index.css';



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
