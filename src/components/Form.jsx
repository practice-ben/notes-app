import React from "react";

export default function Form({addNote}) {
    function respond(e) {
        if(e.key === "Enter") {
            addNote()
        }
    }
    return (
        <form>
            <input type="text" placeholder="New Note" className="add-note" onKeyUp={respond} />
        </form>
    )
}