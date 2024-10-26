import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './compoents/Navbar.jsx';
import Home from './compoents/Home.jsx';
import About from './compoents/About.jsx';
import SignUpModal from './compoents/SignupModal.jsx';
import TeamLogoSlider from './compoents/TeamLogoSlider.jsx';
import Fixtures from './compoents/Fixtures.jsx';
import Footer from './compoents/Footer.jsx';
import App1 from './compoents/App1.jsx';
import ProtectedRoute from './compoents/ProctedRoute.jsx';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(true); 

  // Handle successful sign-up or login
  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    setIsSignUpOpen(false); 
  };

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route
          path="/signup"
          element={
            <SignUpModal
              isOpen={isSignUpOpen}
              onClose={() => setIsSignUpOpen(false)}
              onAuthSuccess={handleAuthSuccess}
            />
          }
        />

        {/* Redirect unauthenticated users to /signup by default */}
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/home" replace /> : <Navigate to="/signup" replace />
          }
        />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <About />
            </ProtectedRoute>
          }
        />
      </Routes>

      {isAuthenticated && (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
            <TeamLogoSlider />
            <Fixtures />
          </div>
          <App1 />
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;