import React from 'react';
import './MyModal.css';

export default function MyModal({ isOpen, children, ...props }) {
  return (
    <div className={`modal${isOpen ? ' modal_active' : ''}`} {...props}>
      <div onClick={(e) => e.stopPropagation()} className='modal__content'>
        {children}
      </div>
    </div>
  );
}
