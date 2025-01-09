import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { useEffect } from 'react';

import { getCurrentWeather } from './api/weatherApiClient';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
