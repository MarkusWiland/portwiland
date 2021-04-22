import React from 'react';

export default function index({ icon, lang, text }) {
  return (
    <div>
      <span className="language-icon">{icon}</span>
      <span className="language-info">
        <h3>{lang}</h3>
        <p>{text}</p>
      </span>
    </div>
  );
}
