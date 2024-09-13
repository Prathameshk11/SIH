import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Button.css';
import '../styles/Input.css';
import '../styles/Login.css';
import '../styles/Select.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [department, setDepartment] = useState('');
  const [userLevel, setUserLevel] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password, department, userLevel });
    
    // Redirect based on user level
    switch (userLevel) {
      case 'admin':
        navigate('/admin-dashboard');
        break;
      case 'departmental-admin':
        navigate('/departmental-admin-dashboard');
        break;
      case 'team-member':
        navigate('/team-member-dashboard');
        break;
      default:
        alert('Please select a user level');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-card-header">
          <h2 className="login-card-title">Login</h2>
        </div>
        <div className="login-card-content">
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <select
                id="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="select"
                required
              >
                <option value="">Select Department</option>
                <option value="urban-planning">Urban Planning</option>
                <option value="public-works">Public Works</option>
                <option value="transportation">Transportation</option>
                <option value="utilities">Utilities</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="userLevel">User Level</label>
              <select
                id="userLevel"
                value={userLevel}
                onChange={(e) => setUserLevel(e.target.value)}
                className="select"
                required
              >
                <option value="">Select User Level</option>
                <option value="admin">Admin</option>
                <option value="departmental-admin">Departmental Admin</option>
                <option value="team-member">Team Member</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
