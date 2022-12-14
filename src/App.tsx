import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookPage from './pages/BookPage';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import StudyOpenPage from './pages/StudyOpenPage';
import StudyPage from './pages/StudyPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/study" element={<StudyPage />} />
        <Route path="/open" element={<StudyOpenPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
