import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DeviceStore from './store/DeviceStore';
import UserStore from './store/UserStore';

export const Context = createContext('without provider')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore()
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);

reportWebVitals();
