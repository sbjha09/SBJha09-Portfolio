
import React, { useState } from 'react';

const initialAIWorkflow = {
  title: "AI Workflow",
  description: "This is the AI workflow section.",
  steps: [
    {
      title: "Step 1",
      description: "This is the first step of the AI workflow.",
    },
    {
      title: "Step 2",
      description: "This is the second step of the AI workflow.",
    },
  ],
};

const AIWorkflowManager = () => {
  const [aiWorkflow, setAIWorkflow] = useState(initialAIWorkflow);
  const [isEditing, setIsEditing] = useState(false);

  const handleAIWorkflowChange = (field, value) => {
    setAIWorkflow({ ...aiWorkflow, [field]: value });
  };

  const handleStepChange = (index, field, value) => {
    const newSteps = [...aiWorkflow.steps];
    newSteps[index][field] = value;
    setAIWorkflow({ ...aiWorkflow, steps: newSteps });
  };

  const handleSaveChanges = () => {
    console.log("Saving changes:", aiWorkflow);
    setIsEditing(false);
  };

  return (
    <div style={{ marginTop: '40px', background: 'var(--sbj-surface)', borderRadius: '24px', border: '1px solid var(--sbj-border)', padding: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h2 style={{ fontFamily: "'Georgia', serif", fontSize: '24px', fontWeight: 800, color: 'var(--sbj-text)' }}>Manage AI Workflow</h2>
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
              value={aiWorkflow.title}
              onChange={(e) => handleAIWorkflowChange('title', e.target.value)}
              className="sbj-input"
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '13px', color: 'var(--sbj-text2)', display: 'block', marginBottom: '8px' }}>Description</label>
            <textarea
              value={aiWorkflow.description}
              onChange={(e) => handleAIWorkflowChange('description', e.target.value)}
              className="sbj-input"
              style={{ height: '120px', resize: 'vertical' }}
            />
          </div>

          <h3 style={{ fontFamily: "'Georgia', serif", fontSize: '20px', fontWeight: 800, color: 'var(--sbj-text)', marginTop: '32px', marginBottom: '16px' }}>Steps</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {aiWorkflow.steps.map((step, index) => (
              <div key={index} style={{ background: 'var(--sbj-bg)', borderRadius: '16px', padding: '24px', border: '1px solid var(--sbj-border)' }}>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ fontSize: '13px', color: 'var(--sbj-text2)', display: 'block', marginBottom: '8px' }}>Step Title</label>
                  <input
                    type="text"
                    value={step.title}
                    onChange={(e) => handleStepChange(index, 'title', e.target.value)}
                    className="sbj-input"
                  />
                </div>
                <div>
                  <label style={{ fontSize: '13px', color: 'var(--sbj-text2)', display: 'block', marginBottom: '8px' }}>Step Description</label>
                  <textarea
                    value={step.description}
                    onChange={(e) => handleStepChange(index, 'description', e.target.value)}
                    className="sbj-input"
                    style={{ height: '120px', resize: 'vertical' }}
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
          <h3 style={{ fontFamily: "'Georgia', serif", fontWeight: 700, fontSize: '18px', marginBottom: '8px', color: 'var(--sbj-text)' }}>{aiWorkflow.title}</h3>
          <p style={{ fontSize: '14px', color: 'var(--sbj-text2)', lineHeight: 1.6 }}>{aiWorkflow.description}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px', marginTop: '32px' }}>
            {aiWorkflow.steps.map((step) => (
              <div key={step.title} style={{ background: 'var(--sbj-bg)', borderRadius: '16px', padding: '24px', border: '1px solid var(--sbj-border)' }}>
                <h4 style={{ fontFamily: "'Georgia', serif", fontWeight: 700, fontSize: '16px', marginBottom: '8px', color: 'var(--sbj-text)' }}>{step.title}</h4>
                <p style={{ fontSize: '14px', color: 'var(--sbj-text2)', lineHeight: 1.6 }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIWorkflowManager;
