import axios from 'axios';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import DogSelector from './components/dogSelector.component';
import { setupInterceptorsTo } from './interceptor/axios.interceptor';

const App = (): JSX.Element => {
  setupInterceptorsTo(axios);

  return (
    <>
      <ToastContainer></ToastContainer>
      <h1>Welcome to Dogs Selector</h1>
    </>
  );
}

export default App;