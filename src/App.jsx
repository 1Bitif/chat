import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { About } from './components/About/About';
import { Home } from './pages/Home/Home';
import { NoteFound } from './pages/NoteFound/NoteFound';
import { Login } from './Login/Login';
import { Register } from './pages/Register/Register';

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

