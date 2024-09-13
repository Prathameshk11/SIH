// src/App.js
import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminDashboard from './pages/AdminDashboard';
import DepartmentalAdminDashboard from './pages/DepartmentalAdminDashboard';
import Forum from './pages/Forum'; // Import Forum
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import ResourceSharing from './pages/ResourceSharing'; // Import ResourceSharing
import TeamMemberDashboard from './pages/TeamMemberDashboard';
import './tailwind.css';

const App = () => {
  const [role, setRole] = React.useState('');

  return (
    <Router>
      <Navbar userRole={role} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login setRole={setRole} />} />
        <Route path="/admin-dashboard" element={role === 'Admin' ? <AdminDashboard /> : <Navigate to="/login" />} />
        <Route path="/departmental-admin-dashboard" element={role === 'Departmental Admin' ? <DepartmentalAdminDashboard /> : <Navigate to="/login" />} />
        <Route path="/team-member-dashboard" element={role === 'Team Member' ? <TeamMemberDashboard /> : <Navigate to="/login" />} />
        <Route path="/resource-sharing" element={<ResourceSharing />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
