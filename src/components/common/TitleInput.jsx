import React from 'react';

function TitleInput({ handleNotesTitleInput, notesTitle }) {
  return (
    <input onChange={handleNotesTitleInput} value={notesTitle} maxLength={50} type="text" placeholder='Masukkan judul...' className='bg-[#18181B] border-2 rounded-md px-4 py-2' />
  );
}

export default TitleInput;