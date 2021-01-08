import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18next from 'i18next';
import { I18nextProvider } from "react-i18next";
import common_es from "./translations/es/common.json";
import common_en from "./translations/en/common.json";


i18next.init({
        interpolation: { escapeValue: false },  // React already does escaping
        lng: 'en',                              // language to use
        resources: {
                en: {
                        common: common_en               // 'common' is our custom namespace
                },
                es: {
                        common: common_es
                },
        }
});


ReactDOM.render(
        <React.StrictMode>
                <I18nextProvider i18n={i18next}>
                        <App />
                </I18nextProvider>
        </React.StrictMode>
        , document.querySelector('#root'));

