import { useState } from "react";
import Note from "./components/Note";
import Form from "./components/Form";

export default function App () {
  // state to manage notes
  const [notes, setNotes] = useState([]);
  
  function addNote(note) {
    console.log(note)
    // setNotes(prev => {
    //   let id = prev.length += 1;
    //   let title = note.substring(0, 25);

    //   return (
    //     [
    //       ...prev, 
    //       {
    //         id: id,
    //         title: title, 
    //         text: note,
    //       }
    //     ]
    //   )
    // })

  }

  console.log(notes)

  return (
    <div className="container" >
      <h1>Notes App</h1>
      <Form addNote={addNote} />
      <div className="content">
        <div className="sidebar">
          {/* This will hold a summarized note */}
          <Note />
        </div>
        <div className="details">
          {/* This will hold a detailed note */}
          <h2>description</h2>
        </div>
      </div>
    </div>
  )
}