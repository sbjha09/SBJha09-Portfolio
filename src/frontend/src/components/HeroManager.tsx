
import React, { useState } from 'react';

const initialHero = {
  title: "Shanti Bhushan Jha",
  subtitle: "ERP Business Analyst & Consultant",
  avatar: "/path/to/avatar.jpg",
};

const HeroManager = () => {
  const [hero, setHero] = useState(initialHero);
  const [isEditing, setIsEditing] = useState(false);

  const handleHeroChange = (field, value) => {
    setHero({ ...hero, [field]: value });
  };

  const handleSaveChanges = () => {
    console.log("Saving changes:", hero);
    setIsEditing(false);
  };

  return (
    <div style={{ marginTop: '40px', background: 'var(--sbj-surface)', borderRadius: '24px', border: '1px solid var(--sbj-border)', padding: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h2 style={{ fontFamily: "'Georgia', serif", fontSize: '24px', fontWeight: 800, color: 'var(--sbj-text)' }}>Manage Hero Section</h2>
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
              value={hero.title}
              onChange={(e) => handleHeroChange('title', e.target.value)}
              className="sbj-input"
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '13px', color: 'var(--sbj-text2)', display: 'block', marginBottom: '8px' }}>Subtitle</label>
            <input
              type="text"
              value={hero.subtitle}
              onChange={(e) => handleHeroChange('subtitle', e.target.value)}
              className="sbj-input"
            />
          </div>
          <div>
            <label style={{ fontSize: '13px', color: 'var(--sbj-text2)', display: 'block', marginBottom: '8px' }}>Avatar URL</label>
            <input
              type="text"
              value={hero.avatar}
              onChange={(e) => handleHeroChange('avatar', e.target.value)}
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
          <h3 style={{ fontFamily: "'Georgia', serif", fontWeight: 700, fontSize: '18px', marginBottom: '8px', color: 'var(--sbj-text)' }}>{hero.title}</h3>
          <p style={{ fontSize: '14px', color: 'var(--sbj-text2)', lineHeight: 1.6 }}>{hero.subtitle}</p>
        </div>
      )}
    </div>
  );
};

export default HeroManager;
