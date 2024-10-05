import React from 'react';
import NoteItem from './NoteItem';

function NotesCollection({ noteList, handleNoteItemRemove, handleNoteItemArchived }) {
  return (
    <div className='flex flex-col gap-y-12'>
      <h1 className='font-medium text-2xl'>Catatan Aktif</h1>
      <section className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {
          noteList.map(note => (
            <NoteItem key={note.id} noteTitle={note.title} noteContent={note.body} noteDate={note.createdAt} />
          ))
        }
      </section>

      <h1 className='font-medium text-2xl'>Arsip Catatan</h1>
      <section className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      </section>
    </div>
  );
}

export default NotesCollection;