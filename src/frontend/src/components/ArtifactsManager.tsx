
import React, { useState } from 'react';

const initialArtifacts = [
  {
    title: "Artifact 1",
    description: "This is the first artifact.",
    image: "/path/to/image1.jpg",
  },
  {
    title: "Artifact 2",
    description: "This is the second artifact.",
    image: "/path/to/image2.jpg",
  },
];

const ArtifactsManager = () => {
  const [artifacts, setArtifacts] = useState(initialArtifacts);
  const [isEditing, setIsEditing] = useState(false);

  const handleArtifactChange = (index, field, value) => {
    const newArtifacts = [...artifacts];
    newArtifacts[index][field] = value;
    setArtifacts(newArtifacts);
  };

  const handleSaveChanges = () => {
    console.log("Saving changes:", artifacts);
    setIsEditing(false);
  };

  return (
    <div style={{ marginTop: '40px', background: 'var(--sbj-surface)', borderRadius: '24px', border: '1px solid var(--sbj-border)', padding: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h2 style={{ fontFamily: "'Georgia', serif", fontSize: '24px', fontWeight: 800, color: 'var(--sbj-text)' }}>Manage Artifacts</h2>
        {!isEditing && (
          <button onClick={() => setIsEditing(true)} style={{ padding: '10px 20px', borderRadius: '50px', background: 'var(--sbj-accent)', color: '#fff', fontWeight: 700, fontSize: '15px', border: 'none', cursor: 'pointer' }}>Edit</button>
        )}
      </div>

      {isEditing ? (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {artifacts.map((artifact, index) => (
              <div key={index} style={{ background: 'var(--sbj-bg)', borderRadius: '16px', padding: '24px', border: '1px solid var(--sbj-border)' }}>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ fontSize: '13px', color: 'var(--sbj-text2)', display: 'block', marginBottom: '8px' }}>Title</label>
                  <input
                    type="text"
                    value={artifact.title}
                    onChange={(e) => handleArtifactChange(index, 'title', e.target.value)}
                    className="sbj-input"
                  />
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ fontSize: '13px', color: 'var(--sbj-text2)', display: 'block', marginBottom: '8px' }}>Description</label>
                  <textarea
                    value={artifact.description}
                    onChange={(e) => handleArtifactChange(index, 'description', e.target.value)}
                    className="sbj-input"
                    style={{ height: '120px', resize: 'vertical' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '13px', color: 'var(--sbj-text2)', display: 'block', marginBottom: '8px' }}>Image URL</label>
                  <input
                    type="text"
                    value={artifact.image}
                    onChange={(e) => handleArtifactChange(index, 'image', e.target.value)}
                    className="sbj-input"
                  />
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
            <button onClick={() => setIsEditing(false)} style={{ padding: '10px 20px', borderRadius: '50px', background: 'var(--sbj-surface2)', color: 'var(--sbj-text)', fontWeight: 700, fontSize: '15px', border: '1px solid var(--sbj-border)', cursor: 'pointer' }}>Cancel</button>
            <button onClick={handleSaveChanges} style={{ padding: '10px 20px', borderRadius: '50px', background: 'var(--sbj-gradient)', color: '#fff', fontWeight: 700, fontSize: '15px', border: 'none', cursor: 'pointer' }}>Save Changes</button>
          </div>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {artifacts.map((artifact) => (
            <div key={artifact.title} style={{ background: 'var(--sbj-bg)', borderRadius: '16px', padding: '24px', border: '1px solid var(--sbj-border)' }}>
              <h3 style={{ fontFamily: "'Georgia', serif", fontWeight: 700, fontSize: '18px', marginBottom: '8px', color: 'var(--sbj-text)' }}>{artifact.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--sbj-text2)', lineHeight: 1.6 }}>{artifact.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArtifactsManager;
