import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initialNote = [];

  const [note, setNote] = useState(initialNote);
  //Get all note
  const getNote = async () => {
    try {
      //Api CAll

      const response = await fetch(`${host}/api/notes/fetchnotes`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.

        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      //Getiing Note
      const json = await response.json();

      setNote(json);
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  //Add note
  const addNote = async (title, description, tag) => {
    //Api CAll
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },

      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    //Adding Note
    const notes = await response.json();
    setNote(note.concat(notes));
  };

  //Delete Note
  const deleteNote = async (id) => {
    //API Call

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects

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
        "auth-token": localStorage.getItem("token"),
      },

      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const json = response.json(); // parses JSON response into native JavaScript objects

    let newNote = JSON.parse(JSON.stringify(note));
    //Editing Note in Client
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
