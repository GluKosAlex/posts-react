import React from 'react';
import './Button.css';


export default function Button({ className: classList, onClick, children }) {
  return (
    <button className={`${classList} button`} onClick={onClick}>
      {children}
    </button>
  );
}
