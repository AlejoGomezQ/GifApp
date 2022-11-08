import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"

import { GifApp } from './GifApp';

import './styles/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GifApp />
  </BrowserRouter>
)
