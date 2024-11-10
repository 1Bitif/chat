import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { About } from './components/About/About';
import { Home } from './components/Home/Home';
import { NoteFound } from './components/NoteFound/NoteFound';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';

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

