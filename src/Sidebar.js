import React from 'react'

import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

const Sidebar = () => {
    return (
        <nav 
            className="Sidebar"
            style={styles.sidebar}
        >
            <div 
                className="logo"
                style={styles.logo}
            >
                <img 
                    src={quill} 
                    alt="Noteherder" 
                    style={styles.logoImg}
                />
            </div>
            <a 
                className="new-note" 
                href="/notes" 
                style={styles.newNote}
            >
                <img 
                    style={styles.aImg} 
                    src={newHover} 
                    alt="New note" 
                />
                <img 
                    className="outline" 
                    style={styles.hover} 
                    src={newIcon} 
                    alt="New note" 
                />
            </a>
            <div 
                className="SignOut"
                style={styles.signOut}
            >
                <button style={styles.signOutB}>
                    <i className="fa fa-sign-out" style={styles.signOutBI}></i>
                </button>
            </div>
        </nav>
    )
}

const styles = {
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
    button: {
        backgroundColor: 'transparent',
        border: '0',
        color: '#008BF8',
        cursor: 'pointer',
    },
    aImg: {
        position: 'absolute',
        left: '0',
        width: '100%',
        transition: 'opacity 0.25s ease-in-out',
    },
    hover: {
        opacity: '0',
    },
    signOut: {
        position: 'absolute',
        bottom: '1rem',
    },
    signOutB: {
        outline: 'none',
    },
    signOutBI: {
        fontSize: '2rem',
    },
}

export default Sidebar