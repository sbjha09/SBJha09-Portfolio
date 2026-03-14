
import React from 'react';
import { useAuthContext } from '../hooks/AuthContext';
import ExpertiseManager from './ExpertiseManager';
import SkillsManager from './SkillsManager';

const AdminDashboard = () => {
  const { logout } = useAuthContext();

  return (
    <div style={{ padding: '40px', color: 'var(--sbj-text)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontFamily: "'Georgia', serif", fontSize: '32px', fontWeight: 800 }}>Admin Dashboard</h1>
        <button
            onClick={logout}
            style={{
                padding: "10px 20px",
                borderRadius: "50px",
                background: "var(--sbj-accent)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "15px",
                border: "none",
                cursor: "pointer",
            }}
        >
            Logout
        </button>
      </div>
      <p style={{ marginBottom: '40px', fontSize: '17px', color: 'var(--sbj-text2)' }}>Welcome to the admin dashboard. Here you will be able to manage the content of your website.</p>
      <ExpertiseManager />
      <SkillsManager />
    </div>
  );
};

export default AdminDashboard;
