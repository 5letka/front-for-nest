import './App.css';
import React from 'react'
import OwnerPage from './pages/OwnerPage/OwnerPage';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/home'   element={<HomePage /> } />
        <Route path='/owner'   element={<OwnerPage /> } />
        <Route path='*'       element={<div>404 NOT FOUND</div>} />
      </Routes>
    </div>
  );
}

export default App;
