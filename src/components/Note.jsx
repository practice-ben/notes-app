import { useState } from "react";

export default function Note(props) {
    return (
        <div className="note">
            <h4 className="note-title">This is the title</h4>
            <p className="note-description">
                This is the note description
            </p>
        </div>
    )
}