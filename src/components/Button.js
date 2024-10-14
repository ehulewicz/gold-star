import React from 'react';

import './Components.css';

function Button({ text, onClick }) {
  return (
    <button className='button' onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
