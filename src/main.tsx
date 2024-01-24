import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './router/AppRouter.tsx'
import './styles/index.css'
import { Provider } from "react-redux";
import { store } from "./redux/store.js";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter/>  
    </Provider>
  </React.StrictMode>,
)
