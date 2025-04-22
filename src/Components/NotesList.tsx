import React from 'react'
import { Note } from '../Types/NoteModel'
import Notes from './Notes'

interface INoteListProps {
  notes: Note[]
  setNotes:React.Dispatch<React.SetStateAction<Note[]>>
}

function NotesList({ notes,setNotes }: INoteListProps) {
  const handleDelete=(id:string)=>{
    console.log("the not id is",id);
setNotes(notes.filter(note=>note.id !==id));
 
  }
  const renderNotes = () => {
    return notes.map(note => {
      return <Notes key={note.id} note={note}  handleDelete={handleDelete}/>
    })
  }

  return (
    <div>
      <div>{renderNotes()}</div>
    </div>
  )
}

export default NotesList
