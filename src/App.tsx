import './App.css';
import React from "react";
import { Provider } from 'react-redux'
import MainWrapper from './components/MainWrapper/MainWrapper'
import store from './tools/store';

function App() {
  return (
      <Provider store={store}>
        <MainWrapper>

        </MainWrapper>
      </Provider>

  );
}

export default App;
