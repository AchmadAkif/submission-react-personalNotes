import React from 'react';
import NoteItem from './NoteItem';

function NotesCollection({ noteList, handleNoteItemRemove, handleNoteItemArchived }) {
  return (
    <>
      <section className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {
          noteList.map(note => (
            <NoteItem key={note.id} noteTitle={note.title} noteContent={note.body} noteDate={note.createdAt} />
          ))
        }
      </section>
    </>
  );
}

export default NotesCollection;