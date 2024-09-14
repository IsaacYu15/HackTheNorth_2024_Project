import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from './sections/landing/Landing.jsx';
import Stats from './sections/stats/Stats.jsx';
import Task from './sections/task/Task.jsx';
import Geese from './sections/geese/Geese.jsx';
import data from './sections/navbar/data.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={data[0].link} element={<Landing />} />
        <Route path={data[1].link} element={<Task />} />
        <Route path={data[2].link} element={<Geese />} />
        <Route path={data[3].link} element={<Stats />} />
      </Routes>
    </Router>
  );
}

export default App;