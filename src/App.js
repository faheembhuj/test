import React from 'react';
import './App.css';
import Navigations from './config/router';
import { Provider } from 'react-redux';
import  store  from './store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navigations />
      </div>
    </Provider>
  );
}

export default App;
