import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { About } from './components/About/About';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Home } from './pages/Home/Home';
import { NoteFound } from './pages/NoteFound/NoteFound';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />


      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NoteFound />} />
    </Routes>
  );
};

