
import React, { useState } from 'react';

const initialAbout = {
  title: "About Me",
  description: "This is the about me section.",
  image: "/path/to/image.jpg",
};

const AboutManager = () => {
  const [about, setAbout] = useState(initialAbout);
  const [isEditing, setIsEditing] = useState(false);

  const handleAboutChange = (field, value) => {
    setAbout({ ...about, [field]: value });
  };

  const handleSaveChanges = () => {
    console.log("Saving changes:", about);
    setIsEditing(false);
  };

  return (
    <div style={{ marginTop: '40px', background: 'var(--sbj-surface)', borderRadius: '24px', border: '1px solid var(--sbj-border)', padding: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h2 style={{ fontFamily: "'Georgia', serif", fontSize: '24px', fontWeight: 800, color: 'var(--sbj-text)' }}>Manage About</h2>
        {!isEditing && (
          <button onClick={() => setIsEditing(true)} style={{ padding: '10px 20px', borderRadius: '50px', background: 'var(--sbj-accent)', color: '#fff', fontWeight: 700, fontSize: '15px', border: 'none', cursor: 'pointer' }}>Edit</button>
        )}
      </div>

      {isEditing ? (
        <div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '13px', color: 'var(--sbj-text2)', display: 'block', marginBottom: '8px' }}>Title</label>
            <input
              type="text"
              value={about.title}
              onChange={(e) => handleAboutChange('title', e.target.value)}
              className="sbj-input"
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '13px', color: 'var(--sbj-text2)', display: 'block', marginBottom: '8px' }}>Description</label>
            <textarea
              value={about.description}
              onChange={(e) => handleAboutChange('description', e.target.value)}
              className="sbj-input"
              style={{ height: '120px', resize: 'vertical' }}
            />
          </div>
          <div>
            <label style={{ fontSize: '13px', color: 'var(--sbj-text2)', display: 'block', marginBottom: '8px' }}>Image URL</label>
            <input
              type="text"
              value={about.image}
              onChange={(e) => handleAboutChange('image', e.target.value)}
              className="sbj-input"
            />
          </div>

          <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
            <button onClick={() => setIsEditing(false)} style={{ padding: '10px 20px', borderRadius: '50px', background: 'var(--sbj-surface2)', color: 'var(--sbj-text)', fontWeight: 700, fontSize: '15px', border: '1px solid var(--sbj-border)', cursor: 'pointer' }}>Cancel</button>
            <button onClick={handleSaveChanges} style={{ padding: '10px 20px', borderRadius: '50px', background: 'var(--sbj-gradient)', color: '#fff', fontWeight: 700, fontSize: '15px', border: 'none', cursor: 'pointer' }}>Save Changes</button>
          </div>
        </div>
      ) : (
        <div>
          <h3 style={{ fontFamily: "'Georgia', serif", fontWeight: 700, fontSize: '18px', marginBottom: '8px', color: 'var(--sbj-text)' }}>{about.title}</h3>
          <p style={{ fontSize: '14px', color: 'var(--sbj-text2)', lineHeight: 1.6 }}>{about.description}</p>
        </div>
      )}
    </div>
  );
};

export default AboutManager;
