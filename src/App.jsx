import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from './components/About/About';
import { Home } from './components/Home/Home';
import { NoteFound } from './components/NoteFound/NoteFound';
import { Login } from './components/Login/Login';

export const App = () => {
  return (
    <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoteFound />} />
    </Routes>
  );
};

