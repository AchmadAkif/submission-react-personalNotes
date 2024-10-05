import React from 'react';

function Button({ name, type, style }) {
  return (
    <button type={type} className={style}>{name}</button>
  );
}

export default Button;