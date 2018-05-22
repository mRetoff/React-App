import React from 'react'

const NoteList = () => {
    return (
        <div className="NoteList" style={styles.noteList}>
            <h3 style={styles.h3}>Notes</h3>
                <ul id="notes" style={styles.notes}>
                    <a className="active">
                        <li>
                            <div className="note">
                                <div className="note-title">
                                     Kohlrabi welsh
                                </div>
                                <div className="note-body">
                                    <p>
                                        Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </a>
                    <a>
                         <li>
                            <div className="note">
                                <div className="note-title">
                                    Dandelion cucumber
                                </div>
                                <div className="note-body">
                                    <p>
                                        Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </a>
                <a>
                    <li>
                        <div className="note">
                            <div className="note-title">
                                Prairie turnip
                            </div>
                            <div className="note-body">
                                <p>
                                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                                </p>
                            </div>
                        </div>
                    </li>
                </a>
            </ul>
        </div>
    )
}

const styles = {
    noteList: {
        borderLeft: '0.1rem solid #eee',
        borderRight: '0.1rem soloid #eee',
        width: '30rem',
    },
    h3: {
        color: '#999',
        textTransform: 'uppercase',
        fontSize: '2rem',
        fontFamily: 'Oxygen',
        fontWeight: '300',
        letterSpacing: '0.3rem',
        margin: '2rem 2rem',
    },
    notes: {
        borderTop: '0.1rem solid #eee',
        overflowY: 'scroll',
        height: 'calc(100vh - 7.2rem)',
        listStyle: 'none',
        marginTop: '1rem',
        padding: '0',
        width: '100%',
        color: '#999',
    },
    
}

export default NoteList