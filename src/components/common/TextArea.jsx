import React from 'react';

function TextArea({ handleNotesContentInput, notesContentInput }) {
  return (
    <textarea onChange={handleNotesContentInput} value={notesContentInput} placeholder='Tuliskan catatanmu disini...' className='bg-[#18181B] border-2 rounded-md px-4 py-3 h-48'></textarea>
  );
}

export default TextArea;