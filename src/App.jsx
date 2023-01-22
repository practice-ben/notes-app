import React from "react";
import Note from "./components/Note";
import Form from "./components/Form";

export default function App () {
  return (
    <div className="container" >
      <h1>Notes App</h1>
      <Form />
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