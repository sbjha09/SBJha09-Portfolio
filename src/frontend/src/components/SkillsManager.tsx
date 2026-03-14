
import React, { useState } from 'react';

const initialCards = [
  {
    icon: "💻",
    title: "React",
    desc: "Building modern, scalable, and maintainable user interfaces for web applications.",
  },
  {
    icon: "⚙️",
    title: "Node.js",
    desc: "Developing efficient and scalable server-side applications and APIs.",
  },
  {
    icon: "📄",
    title: "TypeScript",
    desc: "Enhancing code quality and maintainability with static types.",
  },
  {
    icon: "🎨",
    title: "Tailwind CSS",
    desc: "Rapidly building custom designs with a utility-first CSS framework.",
  },
];

const SkillsManager = () => {
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
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: '24px', fontWeight: 800, color: 'var(--sbj-text)' }}>Manage Skills</h2>
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

export default SkillsManager;
