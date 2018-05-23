import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            currentNote: this.blankNote(),
            notes: [],
        }
    }

    blankNote = () => {
        return {
            id: null,
            title: '',
            body: '',
        }
    }

    setCurrentNote = (note) => {
        this.setState({ currentNote: note })
    }

    resetCurrentNote = () => {
        this.setCurrentNote(this.blankNote())
    }

    saveNote = (note) => {
        const notes = [...this.state.notes]

        if (note.id) {
            const i = notes.findIndex(currentNote => currentNote.id === note.id)
            notes[i] = note
        } else {
            note.id = Date.now()
            notes.push(note)
        }

        this.setState({ notes, currentNote: note })
    }

    deleteNote = () => {
        
    }

    render() {
        return (
            <div 
                className="Main"
                style={style}
            >
                <Sidebar resetCurrentNote={this.resetCurrentNote}/>
                <NoteList 
                    notes={this.state.notes}
                    setCurrentNote={this.setCurrentNote}    
                />
                <NoteForm 
                    currentNote={this.state.currentNote}
                    saveNote={this.saveNote}
                    deleteNote={this.deleteNote}
                />
            </div>
        )
    }
}

const style = {
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch',
}

export default Main