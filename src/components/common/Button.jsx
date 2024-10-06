import React from 'react';

function Button({ name, style, noteId, handleAction }) {
  return (
    <button onClick={() => handleAction(noteId)} className={style}>{name}</button>
  );
}

export default Button;