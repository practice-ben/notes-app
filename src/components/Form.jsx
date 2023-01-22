import { useState } from "react";

export default function Form({addNote}) {
    // maintain local state of the form value
    const [note, setNote] = useState("");

    function respond(e) {
        if(e.key === "Enter") {
            addNote(note)
        } else {
            setNote(e.target.value);
        }
    }

    return (
        <form>
            <input type="text" placeholder="Add New Note" className="add-note" onKeyUp={respond} onChange={respond} value={note} />
        </form>
    )
}