import React from 'react';
import { noteFilterTitle } from '../../utils';
import NoteItem from './NoteItem';

const NoteSection = ({ noteList, handleNoteItemRemove, handleNoteItemArchived, searchQuery }) => {
  return (
    <>
      <section className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {noteList.length !== 0
          ? noteFilterTitle(noteList, searchQuery).map(note => (
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
          : <p className='text-[#aeaeae]'>Tidak ada catatan</p>
        }
      </section>
    </>
  );
};

export default NoteSection;