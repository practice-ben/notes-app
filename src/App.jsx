import { useState, useEffect } from "react";
import Note from "./components/Note";
import Form from "./components/Form";

export default function App () {
  // state to manage notes
  const [notes, setNotes] = useState([]);
  const [elements, setElements] = useState(null)
  
  function edit () {
    console.log("edit")
  }
  function delet (id) {
      console.log(id)
      setNotes(prev => {
        const newArr = prev.slice();
        prev.map((note, index) => {
          if(note.id !== id) {
            newArr.splice(index, 1);
          }
        })
        return newArr;
      })
  }

  useEffect(() => {
    const localNotes = JSON.parse(localStorage.getItem("notes"));
    setNotes(localNotes);
  }, [])

  useEffect(() => {
    if(notes.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes))
    }
  }, [notes])
  
  useEffect(() => {
    if(notes.length > 0) {
      const ele = notes.map(obj => {
        return <Note key={obj.id} {...obj} edit={edit} delet={delet} />
      })
      setElements(ele)
    }
  }, [notes])

  function addNote(note) {
    setNotes(prev => {
      let id = prev.length + 1;
      let title = note.substring(0, 25);
      let newNote;
      
      if(prev.length === 0) {
        newNote = [
          {
            id: id,
            title: title, 
            text: note,
          }
        ]
      } else {
        newNote = [
          {
            id: id,
            title: title, 
            text: note,
          },
          ...prev 
        ]
      }

      return newNote;
    })
  }




  return (
    <div className="container" >
      <h1 className="notes-title">Notes App</h1>
      <Form addNote={addNote} />
      <div className="content">
        <div className="sidebar">
          {/* This will hold a summarized note */}
          {elements}
        </div>
        <div className="details">
          {/* This will hold a detailed note */}
          <h1 className="description-title">Description</h1>
          <div className="description"></div>
        </div>
      </div>
    </div>
  )
}