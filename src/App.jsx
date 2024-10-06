import React from 'react';
import { getInitialData, showFormattedDate } from './utils';
import './App.css';
import Header from './Components/layouts/Header';
import Form from './Components/container/Form';
import NotesCollection from './components/container/NotesCollection';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      notesTitleInput: '',
      notesContentInput: '',
      noteList: getInitialData(),
      maxChar: 50
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
        <Header
          handleSearchQueryChange={this.onSearchQueryChange}
          searchQuery={this.state.searchQuery} />
        <div className='flex flex-col gap-y-32 px-48 pb-20'>
          <Form
            handleNotesTitleInput={this.onNotesTitleInput}
            handleNotesContentInput={this.onNotesContentInput}
            handleFormSubmit={this.onSubmitForm}
            notesTitleInput={this.state.notesTitleInput}
            notesContentInput={this.state.notesContentInput}
          />
          <NotesCollection
            noteList={this.state.noteList}
            handleNoteItemRemove={this.onNoteItemRemove}
            handleNoteItemArchived={this.onNoteItemArchived}
            searchQuery={this.state.searchQuery}
          />
        </div>
      </div>
    );
  }

  onSearchQueryChange(e) {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  onNotesTitleInput(e) {
    this.setState({
      notesTitleInput: e.target.value,
      maxChar: 51 - e.target.value.length
    });

    if (e.target.value.length > 50) {
      this.setState({
        notesTitleInput: e.target.value.substr(0, 50)
      });
    }
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
  }

  onNoteItemArchived(noteId) {
    const arr = this.state.noteList;
    const findIndex = arr.findIndex(e => e.id === noteId);
    const newE = { ...arr[findIndex], archived: !arr[findIndex].archived };

    this.setState({
      noteList: [...arr.filter(e => e.id !== noteId), newE]
    });
  }
}

export default App;
