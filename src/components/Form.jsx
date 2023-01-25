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
            <textarea 
                placeholder="Add New Note" 
                className="add-note"
                onChange={respond} 
                value={note} 
            />
            <button className="add-note-btn"
                onClick={(e) => {
                    e.preventDefault();
                    if(note?.length > 0) {
                        addNote(note)
                    } else {
                        alert("A note cannot be empty")
                    }
                    setNote("")
                }} 
            >
                    Add Note
            </button>
        </form>
    )
}