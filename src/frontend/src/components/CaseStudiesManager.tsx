
import React, { useState } from 'react';

const initialCaseStudies = [
  {
    title: "Case Study 1",
    description: "This is the first case study.",
    image: "/path/to/image1.jpg",
  },
  {
    title: "Case Study 2",
    description: "This is the second case study.",
    image: "/path/to/image2.jpg",
  },
];

const CaseStudiesManager = () => {
  const [caseStudies, setCaseStudies] = useState(initialCaseStudies);
  const [isEditing, setIsEditing] = useState(false);

  const handleCaseStudyChange = (index, field, value) => {
    const newCaseStudies = [...caseStudies];
    newCaseStudies[index][field] = value;
    setCaseStudies(newCaseStudies);
  };

  const handleSaveChanges = () => {
    console.log("Saving changes:", caseStudies);
    setIsEditing(false);
  };

  return (
    <div style={{ marginTop: '40px', background: 'var(--sbj-surface)', borderRadius: '24px', border: '1px solid var(--sbj-border)', padding: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h2 style={{ fontFamily: "'Georgia', serif", fontSize: '24px', fontWeight: 800, color: 'var(--sbj-text)' }}>Manage Case Studies</h2>
        {!isEditing && (
          <button onClick={() => setIsEditing(true)} style={{ padding: '10px 20px', borderRadius: '50px', background: 'var(--sbj-accent)', color: '#fff', fontWeight: 700, fontSize: '15px', border: 'none', cursor: 'pointer' }}>Edit</button>
        )}
      </div>

      {isEditing ? (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {caseStudies.map((caseStudy, index) => (
              <div key={index} style={{ background: 'var(--sbj-bg)', borderRadius: '16px', padding: '24px', border: '1px solid var(--sbj-border)' }}>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ fontSize: '13px', color: 'var(--sbj-text2)', display: 'block', marginBottom: '8px' }}>Title</label>
                  <input
                    type="text"
                    value={caseStudy.title}
                    onChange={(e) => handleCaseStudyChange(index, 'title', e.target.value)}
                    className="sbj-input"
                  />
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ fontSize: '13px', color: 'var(--sbj-text2)', display: 'block', marginBottom: '8px' }}>Description</label>
                  <textarea
                    value={caseStudy.description}
                    onChange={(e) => handleCaseStudyChange(index, 'description', e.target.value)}
                    className="sbj-input"
                    style={{ height: '120px', resize: 'vertical' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '13px', color: 'var(--sbj-text2)', display: 'block', marginBottom: '8px' }}>Image URL</label>
                  <input
                    type="text"
                    value={caseStudy.image}
                    onChange={(e) => handleCaseStudyChange(index, 'image', e.target.value)}
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
          {caseStudies.map((caseStudy) => (
            <div key={caseStudy.title} style={{ background: 'var(--sbj-bg)', borderRadius: '16px', padding: '24px', border: '1px solid var(--sbj-border)' }}>
              <h3 style={{ fontFamily: "'Georgia', serif", fontWeight: 700, fontSize: '18px', marginBottom: '8px', color: 'var(--sbj-text)' }}>{caseStudy.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--sbj-text2)', lineHeight: 1.6 }}>{caseStudy.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CaseStudiesManager;
