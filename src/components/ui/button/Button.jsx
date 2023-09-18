import React from 'react';
import './Button.css';


export default function Button({ className: classList = '', children, ...props }) {
  return (
    <button className={`${classList} button`} {...props}>
      {children}
    </button>
  );
}
