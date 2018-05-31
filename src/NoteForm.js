import React, { Component } from 'react'

import './NoteForm.css'

class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: this.blankNote(),
    }
  }

  componentDidUpdate = () => {
    //Get the ID from url
    const newID = this.props.match.params.id || ''

    //Get the previous ID from state
    const oldID = this.state.note.id || ''

    //Continue only if they differ
    if(newID !== oldID.toString()) {
      const i = this.props.notes.findIndex(currrentNote => currrentNote.id)
      const note = this.props.notes[i] || this.blankNote()

      //Update Note
      if(note.id !== this.state.note.id)
        this.setState({ note })
    }
    
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  handleChanges = (ev) => {
    const note = {...this.state.note}
    note[ev.target.name] = ev.target.value
    this.props.saveNote(note)
    this.setState({ note })
  }

  render() {
    const { removeNote } = this.props

    return (
      <div className="NoteForm">
        <div className="form-actions">
          <button
            type="button"
            onClick={() => removeNote(this.state.note)}
          >
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
        <form>
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title your note"
              value={this.state.note.title}
              onChange={this.handleChanges}
            />
          </p>

          <textarea
            name="body"
            value={this.state.note.body}
            onChange={this.handleChanges}
          ></textarea>
        </form>
      </div>
    )
  }
}

export default NoteForm