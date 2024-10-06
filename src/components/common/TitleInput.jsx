import React from 'react';

function TitleInput({ handleNotesTitleInput, notesTitleInput }) {
  return (
    <input
      onChange={handleNotesTitleInput}
      value={notesTitleInput}
      type="text"
      placeholder='Masukkan judul...'
      className='bg-[#18181B] border-2 rounded-md px-4 py-2'
    />
  );
}

export default TitleInput;