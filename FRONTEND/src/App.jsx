import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import SignUpModal from './components/SignupModal.jsx';
import TeamLogoSlider from './components/TeamLogoSlider.jsx';
import Fixtures from './components/Fixtures.jsx';
import Footer from './components/Footer.jsx';
import App1 from './components/App1.jsx';
import ProtectedRoute from './components/ProctedRoute.jsx';
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