import { useState } from "react";

export default function Form({addNote}) {
    // maintain local state of the form value
    const [note, setNote] = useState("");

    function respond(e) {
        e.preventDefault();
        setNote(e.target.value);
    }
    
    return (
        <form onChange={(e) => e.preventDefault()}>
            <input 
                type="text" 
                placeholder="Add New Note" 
                className="add-note"
                onChange={respond} 
                value={note} 
            />
            <button className="add-note-btn"
                onClick={(e) => {
                    e.preventDefault();
                    addNote(note)
                    setNote("")
                }} 
            >
                    Add Note
            </button>
        </form>
    )
}