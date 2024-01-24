import React, { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
  const initialNote = [
    {
      _id: "65a954a63f6a5242f9f13b44",
      user: "65a64845ff4deb594cf82cb2",
      title: "Hello",
      description: "Hello WOrld",
      tag: "Mine",
      __v: 0,
    },
    {
      _id: "65a954a63f6a5242f9f13b46",
      user: "65a64845ff4deb594cf82cb2",
      title: "Hello",
      description: "Hello WOrld",
      tag: "Mine",
      __v: 0,
    },
    {
      _id: "65a954a73f6a5242f9f13b48",
      user: "65a64845ff4deb594cf82cb2",
      title: "Hello",
      description: "Hello WOrld",
      tag: "Mine",
      __v: 0,
    },
    {
      _id: "65a954a73f6a5242f9f13b4a",
      user: "65a64845ff4deb594cf82cb2",
      title: "Hello",
      description: "Hello WOrld",
      tag: "Mine",
      __v: 0,
    },
    {
      _id: "65a954a73f6a5242f9f13b4c",
      user: "65a64845ff4deb594cf82cb2",
      title: "Hello",
      description: "Hello WOrld",
      tag: "Mine",
      __v: 0,
    },
    {
      _id: "65a954a73f6a5242f9f13b4e",
      user: "65a64845ff4deb594cf82cb2",
      title: "Hello",
      description: "Hello WOrld",
      tag: "Mine",
      __v: 0,
    },
  ];

  const [note, setNote] = useState(initialNote);

  //Add note
  const addNote = (title, description,tag) => {
    console.log("Adding a New Note")
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
  const deleteNote = () => {};
  //Edit Note
  const editNote = () => {};
  return (
    <NoteContext.Provider value={{ note, addNote,deleteNote, editNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
