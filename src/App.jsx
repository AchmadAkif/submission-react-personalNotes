import React from 'react';
import { getInitialData, showFormattedDate } from './utils';
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import NotesCollection from './components/NotesCollection';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      notesTitleInput: '',
      notesContentInput: '',
      noteList: getInitialData(),
      inputLength: 0
    };

    this.onSearchQueryChange = this.onSearchQueryChange.bind(this);
    this.onNotesTitleInput = this.onNotesTitleInput.bind(this);
    this.onNotesContentInput = this.onNotesContentInput.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onNoteItemRemove = this.onNoteItemRemove.bind(this);
    this.onNoteItemArchived = this.onNoteItemArchived.bind(this);
  }

  render() {
    return (
      <div className='bg-[#18181B] text-white'>
        <Header handleSearchQueryChange={this.onSearchQueryChange} searchQuery={this.state.searchQuery} />
        <div className='flex flex-col gap-y-32 px-48'>
          <Form handleNotesTitleInput={this.onNotesTitleInput} handleNotesContentInput={this.onNotesContentInput} handleFormSubmit={this.onSubmitForm} notesTitleInput={this.state.notesTitleInput} notesContentInput={this.state.notesContentInput} inputLength={this.state.inputLength} />
          <NotesCollection noteList={this.state.noteList} handleNoteItemRemove={this.onNoteItemRemove} handleNoteItemArchived={this.onNoteItemArchived} />
        </div>
      </div>
    );
  }

  onSearchQueryChange(e) {
    this.setState({
      searchQuery: e.target.value
    });
  };

  onNotesTitleInput(e) {
    this.setState({
      notesTitleInput: e.target.value,
      inputLength: e.target.value.length
    });
  }

  onNotesContentInput(e) {
    this.setState({
      notesContentInput: e.target.value
    });
  }

  onSubmitForm(e) {
    const noteData = {
      id: Date.now(),
      title: this.state.notesTitleInput,
      body: this.state.notesContentInput,
      archived: false,
      createdAt: showFormattedDate(new Date())
    };

    this.setState({
      notesTitleInput: '',
      notesContentInput: '',
      noteList: [...this.state.noteList, noteData]
    });


    e.preventDefault();
  }

  onNoteItemRemove(noteId) {
    const arr = this.state.noteList;

    this.setState({
      noteList: arr.filter(element => element.id !== noteId)
    });

    console.log(arr);
  }

  onNoteItemArchived(noteId) {
    console.log(noteId, "arsip");
  }
}

export default App;
