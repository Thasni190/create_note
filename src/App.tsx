
import { useState } from 'react'
import './App.css'
import { Note } from './Types/NoteModel'
import Header from './Components/Header'
import NotesList from './Components/NotesList'
import CreateNotes from './Components/CreateNotes'

function App() {
 const [notes,setNotes]=useState<Note[]>([{
    id:(new Date).toString(),
    title:"Meeting",
    text:"Schedule meeting with the Frontend developer Team",
    color:"#dfdfdf",
    date:(new Date).toString()

 }])

  return (
    <>
      <div>
        <Header/>
        <NotesList notes={notes} setNotes={setNotes}/>
        <CreateNotes notes={notes} setNotes={setNotes}/>
      </div>
    </>
  )
}

export default App
