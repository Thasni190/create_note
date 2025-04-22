import React from 'react'
import { Note } from '../Types/NoteModel'

interface INotesProps {
  note: Note,
  handleDelete:(id:string)=>void
}

function Notes({ note,handleDelete }: INotesProps) {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white truncate">
            {note.title}
          </h2>
       
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400">
            {note.date}
          </span>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {note.text}
        </p>
        
        <button
  onClick={() => handleDelete(note.id)}     
      className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
          Delete
        </button>
      </div>
    </div>
  )
}

export default Notes