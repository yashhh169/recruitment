import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { ContingentStaffingPage } from './pages/ContingentStaffingPage';
import { ContractProjectStaffingPage } from './pages/ContractProjectStaffingPage';

export const AppContent = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contingent-staffing" element={<ContingentStaffingPage />} />
          <Route path="/contract-project-staffing" element={<ContractProjectStaffingPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}
