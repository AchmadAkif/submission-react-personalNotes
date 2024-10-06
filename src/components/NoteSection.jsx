import React from 'react';
import NoteItem from './NoteItem';

const NoteSection = ({ noteList, handleNoteItemRemove, handleNoteItemArchived }) => {
  return (
    <>
      <section className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {noteList.length !== 0 ?
          noteList.map(note => (
            <NoteItem
              key={note.id}
              noteId={note.id}
              noteTitle={note.title}
              noteContent={note.body}
              noteDate={note.createdAt}
              handleNoteItemRemove={handleNoteItemRemove}
              handleNoteItemArchived={handleNoteItemArchived}
            />
          ))
          : <p>Tidak ada catatan</p>
        }
      </section>
    </>
  );
};

export default NoteSection;