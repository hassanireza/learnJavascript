import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ToastBar from './components/ToastBar';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import LessonPage from './pages/Lesson';
import ExamIntro from './pages/ExamIntro';
import ExamTake from './pages/ExamTake';
import ExamResult from './pages/ExamResult';
import CertificateView from './pages/CertificateView';
import CertificateVerify from './pages/CertificateVerify';
import NotFound from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <ToastBar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/lesson/:day" element={<LessonPage />} />
          <Route path="/exam" element={<ExamIntro />} />
          <Route path="/exam/take" element={<ExamTake />} />
          <Route path="/exam/result/:attemptId" element={<ExamResult />} />
          <Route path="/certificate/:certId" element={<CertificateView />} />
          <Route path="/verify/:certId" element={<CertificateVerify />} />
          <Route path="/verify" element={<CertificateVerify />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
