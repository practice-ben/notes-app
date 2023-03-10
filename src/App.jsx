import { useState, useEffect } from "react";
import Note from "./components/Note";
import Form from "./components/Form";
import { v4 as idKey } from "uuid";

export default function App () {
  // state to manage notes
  const [notes, setNotes] = useState([]);
  const [show, setShow] = useState(false);

  const elements = notes?.map(obj => {
    const key = idKey();
    return <Note key={key} {...obj} shown={shown} edit={edit} delet={delet} />
  })
  
  const styles = {
    descriptionShown: {
      display: "flex"
    }
  }
  useEffect(() => {
    const localNotes = JSON.parse(localStorage.getItem("notes"));
    setNotes(localNotes);
  }, [])

  useEffect(() => {
    if(notes?.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes))
    }
  }, [notes])

  function shown(bool) {
    console.log("called")
    if(bool == undefined) {
      setShow(prev => !prev);
    } else {
      setShow(bool);
    }
  }

  function edit (id) {
    const edited = notes.filter(note => note.id === id);
    console.log(edited)
  }
  function delet (id) {
      setNotes(prev => {
        const newArr = prev.filter((note, index) => note.id != id);
        return newArr
      })
  }

  function addNote(note) {
    setNotes(prev => {
      let id = idKey();
      let title = note.substring(0, 25);
      let newNote;
      
      if(!prev) {
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
        <div className={show ? "details" : "hide"}>
          {/* This will hold a detailed note */}
          <div className="close" onClick={() => shown(false)}>X</div>
          <h1 className="description-title">Description</h1>
          <div className={show ? `${styles.descriptionShown} description` : "description hide"}></div>
        </div>
      </div>
    </div>
  )
}