
import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../hooks/AuthContext';

const AdminLoginModal = ({ onClose }) => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const { login, isLoading, error, isAuthenticated } = useAuthContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(userId, password);
    };

    useEffect(() => {
        if (isAuthenticated) {
            onClose();
        }
    }, [isAuthenticated, onClose]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1001, opacity: 0, animation: 'fadeIn 0.3s forwards' }}>
      <div style={{ padding: '40px', background: 'var(--sbj-bg)', borderRadius: '24px', border: '1px solid var(--sbj-border)', width: '100%', maxWidth: '400px', animation: 'slideUp 0.4s forwards', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '20px', right: '20px', background: 'transparent', border: 'none', color: 'var(--sbj-text)', fontSize: '24px', cursor: 'pointer' }}>&times;</button>
        <h2 style={{ fontFamily: "'Georgia', serif", fontSize: '24px', fontWeight: 800, color: 'var(--sbj-text)', textAlign: 'center', marginBottom: '24px' }}>Admin Login</h2>
        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="user-id"
                style={{
                  fontSize: "13px",
                  color: "var(--sbj-text2)",
                  marginBottom: "8px",
                  display: "block",
                }}
              >
                User ID
              </label>
              <input
                id="user-id"
                type="text"
                className="sbj-input"
                placeholder="Enter your User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div style={{ marginBottom: "12px" }}>
              <label
                htmlFor="password"
                style={{
                  fontSize: "13px",
                  color: "var(--sbj-text2)",
                  marginBottom: "8px",
                  display: "block",
                }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="sbj-input"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
             <div style={{ height: '20px', marginBottom: '12px', textAlign: 'center', color: 'var(--sbj-accent)', fontSize: '13px' }}>
                {error}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "50px",
                background: "var(--sbj-gradient)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "15px",
                border: "none",
                cursor: isLoading ? 'not-allowed' : 'pointer',
                transition: "transform 0.15s, box-shadow 0.3s",
                boxShadow: "0 0 20px var(--sbj-glow)",
                opacity: isLoading ? 0.7 : 1,
              }}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
        </form>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .sbj-input {
            width: 100%;
            padding: 12px;
            borderRadius: 8px;
            border: 1px solid var(--sbj-border);
            background: var(--sbj-surface);
            color: var(--sbj-text);
            fontSize: 14px;
        }
      `}</style>
    </div>
  );
};

export default AdminLoginModal;
