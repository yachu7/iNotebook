import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initialNote = [];

  const [note, setNote] = useState(initialNote);
  //Get all note
  const getNote = async () => {
    //Api CAll
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhNjQ4NDVmZjRkZWI1OTRjZjgyY2IyIn0sImlhdCI6MTcwNTUxMDg0NX0.qQtqqeU0pQBhYA6GG7K9jxB6f85dcKebm9UUhINENYY",
      },
    });

    //Getiing Note
    const json = await response.json();
    console.log(json);
    setNote(json);
  };

  //Add note
  const addNote = async (title, description, tag) => {
    //Api CAll
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhNjQ4NDVmZjRkZWI1OTRjZjgyY2IyIn0sImlhdCI6MTcwNTUxMDg0NX0.qQtqqeU0pQBhYA6GG7K9jxB6f85dcKebm9UUhINENYY",
      },

      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(json)

    //Adding Note
    console.log("Adding a New Note");
    const notes = {
      _id: "65a954a73f6a5242f9f13b4e",
      user: "65a64845ff4deb594cf82cb2",
      title: title,
      description: description,
      tag: tag,
      __v: 0,
    };
    setNote(note.concat(notes));
  };

  //Delete Note
  const deleteNote = async (id) => {
    //API Call

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhNjQ4NDVmZjRkZWI1OTRjZjgyY2IyIn0sImlhdCI6MTcwNTUxMDg0NX0.qQtqqeU0pQBhYA6GG7K9jxB6f85dcKebm9UUhINENYY",
      },
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log(json);

    // Deleting Note
    const newNote = note.filter((notes) => {
      return notes._id !== id;
    });
    setNote(newNote);
    console.log("Deleting Note");
  };
  //Edit Note
  const editNote = async (id, title, description, tag) => {
    //API Call

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhNjQ4NDVmZjRkZWI1OTRjZjgyY2IyIn0sImlhdCI6MTcwNTUxMDg0NX0.qQtqqeU0pQBhYA6GG7K9jxB6f85dcKebm9UUhINENYY",
      },

      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const json = response.json(); // parses JSON response into native JavaScript objects
    console.log(json)


    let newNote = JSON.parse(JSON.stringify(note))
    //Editing Note
    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if (element._id === id) {
        newNote[index].title = title;
        newNote[index].description = description;
        newNote[index].tag = tag;
        break;
      }

    }
    setNote(newNote);
  };
  return (
    <NoteContext.Provider
      value={{ note, addNote, deleteNote, editNote, getNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
