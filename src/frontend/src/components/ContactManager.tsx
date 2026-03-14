
import React, { useState } from 'react';

const initialContact = {
  email: "shantibhushanjha@gmail.com",
  phone: "+91 9999999999",
};

const ContactManager = () => {
  const [contact, setContact] = useState(initialContact);
  const [isEditing, setIsEditing] = useState(false);

  const handleContactChange = (field, value) => {
    setContact({ ...contact, [field]: value });
  };

  const handleSaveChanges = () => {
    console.log("Saving changes:", contact);
    setIsEditing(false);
  };

  return (
    <div style={{ marginTop: '40px', background: 'var(--sbj-surface)', borderRadius: '24px', border: '1px solid var(--sbj-border)', padding: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h2 style={{ fontFamily: "'Georgia', serif", fontSize: '24px', fontWeight: 800, color: 'var(--sbj-text)' }}>Manage Contact</h2>
        {!isEditing && (
          <button onClick={() => setIsEditing(true)} style={{ padding: '10px 20px', borderRadius: '50px', background: 'var(--sbj-accent)', color: '#fff', fontWeight: 700, fontSize: '15px', border: 'none', cursor: 'pointer' }}>Edit</button>
        )}
      </div>

      {isEditing ? (
        <div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '13px', color: 'var(--sbj-text2)', display: 'block', marginBottom: '8px' }}>Email</label>
            <input
              type="text"
              value={contact.email}
              onChange={(e) => handleContactChange('email', e.target.value)}
              className="sbj-input"
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '13px', color: 'var(--sbj-text2)', display: 'block', marginBottom: '8px' }}>Phone</label>
            <input
              type="text"
              value={contact.phone}
              onChange={(e) => handleContactChange('phone', e.target.value)}
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
          <p style={{ fontSize: '14px', color: 'var(--sbj-text2)', lineHeight: 1.6 }}>Email: {contact.email}</p>
          <p style={{ fontSize: '14px', color: 'var(--sbj-text2)', lineHeight: 1.6 }}>Phone: {contact.phone}</p>
        </div>
      )}
    </div>
  );
};

export default ContactManager;
