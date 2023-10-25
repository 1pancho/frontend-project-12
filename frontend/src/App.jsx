/* eslint-disable */

import React from 'react';
import './App.css';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import NotFoundPage from './components/NotFoundpage';
import LoginPage from './components/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';


const App = () => {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="one" element={<NotFoundPage/> } />
        <Route path="*" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;

