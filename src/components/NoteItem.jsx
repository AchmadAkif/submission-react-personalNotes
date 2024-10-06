import React from 'react';
import Button from './common/Button';

function NoteItem({ noteId, noteTitle, noteContent, noteDate, handleNoteItemRemove, handleNoteItemArchived }) {
  return (
    <div className='flex flex-col justify-between border-2'>
      <section className='flex flex-col justify-between gap-y-3 p-4'>
        <h1 className='font-bold text-lg'>{noteTitle}</h1>
        <p className='font-light text-sm text-[#888889]'>{noteDate}</p>
        <p>{noteContent}</p>
      </section>
      <section className='flex justify-between border-t-2'>
        <Button
          name='Hapus'
          style='border-r-2 p-2 w-1/2 font-medium text-[#CE191F] hover:text-[#A31315] transition-[0.3s]'
          noteId={noteId}
          handleAction={handleNoteItemRemove}
        />
        <Button
          name='Pindahkan'
          style='w-1/2 font-medium text-[#F8FA93] hover:text-white transition-[0.3s]'
          noteId={noteId}
          handleAction={handleNoteItemArchived}
        />
      </section>
    </div>
  );
}

export default NoteItem;