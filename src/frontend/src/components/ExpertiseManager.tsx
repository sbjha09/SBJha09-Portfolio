
import React, { useState } from 'react';

const initialCards = [
  {
    icon: "⚙️",
    title: "ERP Functional Design",
    desc: "Designing scalable ERP workflows, feature logic, validation rules, and functional solutions aligned with real retail business scenarios.",
  },
  {
    icon: "📊",
    title: "Process Optimization",
    desc: "Identifying inefficiencies, mapping as-is vs to-be business processes, and improving system workflows to reduce manual effort.",
  },
  {
    icon: "✅",
    title: "UAT & Release Validation",
    desc: "Leading structured UAT cycles, preparing test scenarios, validating business cases, and ensuring production-ready releases with 95% pass rate.",
  },
  {
    icon: "🔗",
    title: "API Integration & Automation",
    desc: "Designing Excel automation, API-driven workflows, and system integrations to reduce manual work and improve operational efficiency by 40–50%.",
  },
  {
    icon: "🤖",
    title: "AI-Enabled Business Analysis",
    desc: "Using AI tools for requirement expansion, FRD drafting, feature comparison, and edge-case identification — reducing documentation effort by 30%.",
  },
  {
    icon: "🗄️",
    title: "Data & SQL Analysis",
    desc: "Analyzing ERP data using SQL (PostgreSQL, MS SQL Server), validating business logic, and supporting decision-making through structured data insights.",
  },
];

const ExpertiseManager = () => {
  const [cards, setCards] = useState(initialCards);
  const [isEditing, setIsEditing] = useState(false);

  const handleCardChange = (index, field, value) => {
    const newCards = [...cards];
    newCards[index][field] = value;
    setCards(newCards);
  };

  const handleSaveChanges = () => {
    // Here you would typically make an API call to save the changes.
    console.log("Saving changes:", cards);
    setIsEditing(false);
  };

  return (
    <div style={{ marginTop: '40px', background: 'var(--sbj-surface)', borderRadius: '24px', border: '1px solid var(--sbj-border)', padding: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: '24px', fontWeight: 800, color: 'var(--sbj-text)' }}>Manage Core Expertise</h2>
            {!isEditing && (
                <button onClick={() => setIsEditing(true)} style={{ padding: '10px 20px', borderRadius: '50px', background: 'var(--sbj-accent)', color: '#fff', fontWeight: 700, fontSize: '15px', border: 'none', cursor: 'pointer' }}>Edit</button>
            )}
        </div>

      {isEditing ? (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {cards.map((card, index) => (
              <div key={index} style={{ background: 'var(--sbj-bg)', borderRadius: '16px', padding: '24px', border: '1px solid var(--sbj-border)' }}>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ fontSize: '13px', color: 'var(--sbj-text2)', display: 'block', marginBottom: '8px' }}>Icon</label>
                  <input
                    type="text"
                    value={card.icon}
                    onChange={(e) => handleCardChange(index, 'icon', e.target.value)}
                    className="sbj-input"
                  />
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ fontSize: '13px', color: 'var(--sbj-text2)', display: 'block', marginBottom: '8px' }}>Title</label>
                  <input
                    type="text"
                    value={card.title}
                    onChange={(e) => handleCardChange(index, 'title', e.target.value)}
                    className="sbj-input"
                  />
                </div>
                <div>
                  <label style={{ fontSize: '13px', color: 'var(--sbj-text2)', display: 'block', marginBottom: '8px' }}>Description</label>
                  <textarea
                    value={card.desc}
                    onChange={(e) => handleCardChange(index, 'desc', e.target.value)}
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {cards.map((card) => (
            <div key={card.title} style={{ background: 'var(--sbj-bg)', borderRadius: '16px', padding: '24px', border: '1px solid var(--sbj-border)' }}>
              <div style={{ fontSize: '22px', marginBottom: '16px' }}>{card.icon}</div>
              <h3 style={{ fontFamily: "'Georgia', serif", fontWeight: 700, fontSize: '18px', marginBottom: '8px', color: 'var(--sbj-text)' }}>{card.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--sbj-text2)', lineHeight: 1.6 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpertiseManager;
