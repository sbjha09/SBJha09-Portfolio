
import React, { useState } from 'react';

const initialImpact = {
  title: "Impact",
  description: "This is the impact section.",
  metrics: [
    {
      value: "40%",
      label: "Metric 1",
    },
    {
      value: "60%",
      label: "Metric 2",
    },
  ],
};

const ImpactManager = () => {
  const [impact, setImpact] = useState(initialImpact);
  const [isEditing, setIsEditing] = useState(false);

  const handleImpactChange = (field, value) => {
    setImpact({ ...impact, [field]: value });
  };

  const handleMetricChange = (index, field, value) => {
    const newMetrics = [...impact.metrics];
    newMetrics[index][field] = value;
    setImpact({ ...impact, metrics: newMetrics });
  };

  const handleSaveChanges = () => {
    console.log("Saving changes:", impact);
    setIsEditing(false);
  };

  return (
    <div style={{ marginTop: '40px', background: 'var(--sbj-surface)', borderRadius: '24px', border: '1px solid var(--sbj-border)', padding: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h2 style={{ fontFamily: "'Georgia', serif", fontSize: '24px', fontWeight: 800, color: 'var(--sbj-text)' }}>Manage Impact</h2>
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
              value={impact.title}
              onChange={(e) => handleImpactChange('title', e.target.value)}
              className="sbj-input"
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '13px', color: 'var(--sbj-text2)', display: 'block', marginBottom: '8px' }}>Description</label>
            <textarea
              value={impact.description}
              onChange={(e) => handleImpactChange('description', e.target.value)}
              className="sbj-input"
              style={{ height: '120px', resize: 'vertical' }}
            />
          </div>

          <h3 style={{ fontFamily: "'Georgia', serif", fontSize: '20px', fontWeight: 800, color: 'var(--sbj-text)', marginTop: '32px', marginBottom: '16px' }}>Metrics</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {impact.metrics.map((metric, index) => (
              <div key={index} style={{ background: 'var(--sbj-bg)', borderRadius: '16px', padding: '24px', border: '1px solid var(--sbj-border)' }}>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ fontSize: '13px', color: 'var(--sbj-text2)', display: 'block', marginBottom: '8px' }}>Value</label>
                  <input
                    type="text"
                    value={metric.value}
                    onChange={(e) => handleMetricChange(index, 'value', e.target.value)}
                    className="sbj-input"
                  />
                </div>
                <div>
                  <label style={{ fontSize: '13px', color: 'var(--sbj-text2)', display: 'block', marginBottom: '8px' }}>Label</label>
                  <input
                    type="text"
                    value={metric.label}
                    onChange={(e) => handleMetricChange(index, 'label', e.target.value)}
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
        <div>
          <h3 style={{ fontFamily: "'Georgia', serif", fontWeight: 700, fontSize: '18px', marginBottom: '8px', color: 'var(--sbj-text)' }}>{impact.title}</h3>
          <p style={{ fontSize: '14px', color: 'var(--sbj-text2)', lineHeight: 1.6 }}>{impact.description}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px', marginTop: '32px' }}>
            {impact.metrics.map((metric) => (
              <div key={metric.label} style={{ background: 'var(--sbj-bg)', borderRadius: '16px', padding: '24px', border: '1px solid var(--sbj-border)' }}>
                <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--sbj-accent)' }}>{metric.value}</div>
                <div style={{ fontSize: '14px', color: 'var(--sbj-text2)', marginTop: '8px' }}>{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImpactManager;
