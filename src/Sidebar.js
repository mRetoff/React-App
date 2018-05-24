import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

const Sidebar = ({ resetCurrentNote, signOut }) => {
    return (
        <nav 
            className={css(styles.sidebar)}
        >
            <div 
                className={css(styles.logo)}
            >
                <img 
                    src={quill}
                    alt='Noteherder'
                    className={css(styles.logoImg)}
                />
            </div>
            <a 
                className={css(styles.newNote)}
                href="/notes"
                onClick={(ev) => {
                    ev.preventDefault()
                    resetCurrentNote()
                }}
            >
                <img 
                    src={newHover} 
                    alt="New note"
                    className={css(styles.newNoteImg)} 
                />
                <img 
                    className={css(styles.newNoteImg, styles.newNoteHover)}
                    src={newIcon} 
                    alt="New note" 
                />
            </a>
            <div 
                className={css(styles.signOut)}
            >
                <button 
                    className={css(styles.button)}
                    onClick={signOut}    
                >
                    <i 
                        className={`fas fa-sign-out-alt ${css(styles.signOutBI)}`}
                        title='Signout'
                    >
                    </i>
                </button>
            </div>
        </nav>
    )
}

const styles = StyleSheet.create({
    sidebar: {
        width: '6rem',
        backgroundColor: '#f3f3f3',
        padding: '0.5rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        fontFamily: '"Fauna One"',
        color: '#666',
        fontSize: '3rem',
    },
    logoImg: {
        width: '3rem',
        paddingLeft: '0.4rem',
    },
    newNote: {
        marginTop: '2rem',
        position: 'relative',
        width: '4rem',
    },
    newNoteImg: {
        position: 'absolute',
        left: '0',
        width: '100%',
        transition: 'opacity 0.25s ease-in-out',
    },
    newNoteHover: {
        ':hover': {
            opacity: '0',
        },
    },
    signOut: {
        position: 'absolute',
        bottom: '1rem',
    },
    signOutBI: {
        fontSize: '2rem',
    },
    button: {
        backgroundColor: 'transparent',
        border: '0',
        color: '#008bf8',
        cursor: 'pointer',
        outline: 'none',
      },
})

export default Sidebar