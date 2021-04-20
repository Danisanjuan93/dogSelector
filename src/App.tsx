import axios from 'axios';
import React from 'react';
import { useTranslation } from 'react-i18next';
import "react-image-gallery/styles/css/image-gallery.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './i18n';
import { setupInterceptorsTo } from './interceptor/axios.interceptor';
import { HomePage } from './pages/homePage';
import TranslationContext from './utils/translation.context';

const App = (): JSX.Element => {
  setupInterceptorsTo(axios);
  const TFuntion = TranslationContext();
  return (
    <TFuntion.Provider value={{ translator: useTranslation().t }}>
      <ToastContainer></ToastContainer>
      <HomePage />
    </TFuntion.Provider>
  );
}

export default App;