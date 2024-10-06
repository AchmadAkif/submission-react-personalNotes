import React from 'react';
import NoteSection from './NoteSection';

function NotesCollection({ noteList, handleNoteItemRemove, handleNoteItemArchived, searchQuery }) {
  return (
    <div className='flex flex-col gap-y-12'>
      <h1 className='font-medium text-2xl'>Catatan Aktif</h1>
      <NoteSection
        noteList={noteList.filter(note => note.archived === false)}
        handleNoteItemRemove={handleNoteItemRemove}
        handleNoteItemArchived={handleNoteItemArchived}
        searchQuery={searchQuery}
      />
      <h1 className='font-medium text-2xl'>Arsip Catatan</h1>
      <NoteSection
        noteList={noteList.filter(note => note.archived === true)}
        handleNoteItemRemove={handleNoteItemRemove}
        handleNoteItemArchived={handleNoteItemArchived}
        searchQuery={searchQuery}
      />
    </div>
  );
}

export default NotesCollection;