/* eslint-disable */

import React from "react";
import { initReactI18next } from 'react-i18next';
import i18next from "i18next";
import App from "./App";
import resources from './locales/index.js';
import { I18nextProvider } from 'react-i18next';



const Init = async () => {
    const i18n = i18next.createInstance();
    await   i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'ru',
      debug: true,
    })
    
    return (
        <I18nextProvider i18n={i18n}>
            <App />
        </I18nextProvider>
    )
}

export default Init;