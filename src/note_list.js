import React from 'react';
import NoteItem from './note_item';


const NoteList = (props) => {
  const NotesItems = props.notes.entrySeq().map(([id, note]) => {
    return <NoteItem id={id} note={note} del={props.del} update={props.update} />;
  });

  return (
    <ul>
      {NotesItems}
    </ul>
  );
};

export default NoteList;
