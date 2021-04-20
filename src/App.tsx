import axios from 'axios';
import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import DogSelector from './components/autocomplete/dogSelector.component';
import './i18n';
import { setupInterceptorsTo } from './interceptor/axios.interceptor';

const App = (): JSX.Element => {
  setupInterceptorsTo(axios);

  return (
    <>
      <ToastContainer></ToastContainer>
      <DogSelector />
    </>
  );
}

export default App;