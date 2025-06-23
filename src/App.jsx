import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignInPage from './pages/SignInPage';
import RegistrationPage from './pages/RegistrationPage';
import SuccessPage from './pages/SuccessPage';

import { setupPWAInstallPrompt } from './pwaInstallPrompt';

export default function App() {
  useEffect(() => {
    setupPWAInstallPrompt(); 
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}
