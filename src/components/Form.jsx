import React, { useState } from 'react';
import TitleInput from './common/TitleInput';
import TextArea from './common/TextArea';
import Button from './common/Button';

function Form({ handleNotesTitleInput, handleNotesContentInput, handleFormSubmit, notesTitleInput, notesContentInput, inputLength }) {
  return (
    <form onSubmit={handleFormSubmit} className='flex flex-col gap-y-2 md:px-32 lg:px-64'>
      <h1 className='my-6 font-medium text-[24px]'>Buat Catatan</h1>
      <span className='self-end'>Sisa karakter : {50 - inputLength}</span>
      <TitleInput handleNotesTitleInput={handleNotesTitleInput} notesTitleInput={notesTitleInput} />
      <TextArea handleNotesContentInput={handleNotesContentInput} notesContentInput={notesContentInput} />
      <Button name='Buat' style='border-2 rounded-md py-2' />
    </form>
  );
}

export default Form;