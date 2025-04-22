import React, { useState } from 'react';
import { Note } from '../Types/NoteModel';

interface ICreateNoteProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

function CreateNotes({ notes, setNotes }: ICreateNoteProps) {
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [color, setColor] = useState<string>('#ffffff');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!title.trim() || !text.trim()) {
      setError('All fields are mandatory');
      return;
    }

    setError('');

    const newNote: Note = {
      id: new Date().toISOString(),
      title: title.trim(),
      text: text.trim(),
      color,
      date: new Date().toLocaleString(),
    };

    setNotes([...notes, newNote]);

    // Clear fields after submission
    setTitle('');
    setText('');
    setColor('#ffffff');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl dark:bg-gray-800">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Create New Note</h2>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Note title..."
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Text</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white min-h-[120px]"
            placeholder="Your note content..."
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Note Color</label>
          <div className="flex items-center space-x-4">
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-12 h-12 cursor-pointer bg-white border border-gray-300 rounded-lg dark:bg-gray-700"
            />
            <span className="text-sm text-gray-500 dark:text-gray-400">Click to pick a color</span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
        >
          Create Note
        </button>
      </form>
    </div>
  );
}

export default CreateNotes;
