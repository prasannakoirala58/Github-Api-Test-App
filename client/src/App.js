import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RepoDetails from './components/RepoDetails';
import HomePage from './HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/repos/:owner/:repo" element={<RepoDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
