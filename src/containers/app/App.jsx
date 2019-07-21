import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Header } from '../Header'

import './App.css';

export default function App() {
    return (
      <BrowserRouter>
        <Header/>
        <Switch>
          
        </Switch>
      </BrowserRouter>
    );
}