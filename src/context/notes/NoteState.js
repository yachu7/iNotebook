import React, { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
  const initialNote = [
    {
      "_id": "65a954a63f6a5242f9f13b44",
      "user": "65a64845ff4deb594cf82cb2",
      "title": "Hello",
      "description": "Hello WOrld",
      "tag": "Mine",
      "__v": 0
    },
    {
      "_id": "65a954a63f6a5242f9f13b46",
      "user": "65a64845ff4deb594cf82cb2",
      "title": "Hello",
      "description": "Hello WOrld",
      "tag": "Mine",
      "__v": 0
    },
    {
      "_id": "65a954a73f6a5242f9f13b48",
      "user": "65a64845ff4deb594cf82cb2",
      "title": "Hello",
      "description": "Hello WOrld",
      "tag": "Mine",
      "__v": 0
    },
    {
      "_id": "65a954a73f6a5242f9f13b4a",
      "user": "65a64845ff4deb594cf82cb2",
      "title": "Hello",
      "description": "Hello WOrld",
      "tag": "Mine",
      "__v": 0
    },
    {
      "_id": "65a954a73f6a5242f9f13b4c",
      "user": "65a64845ff4deb594cf82cb2",
      "title": "Hello",
      "description": "Hello WOrld",
      "tag": "Mine",
      "__v": 0
    },
    {
      "_id": "65a954a73f6a5242f9f13b4e",
      "user": "65a64845ff4deb594cf82cb2",
      "title": "Hello",
      "description": "Hello WOrld",
      "tag": "Mine",
      "__v": 0
    }
  ]

  const [note, setNote] = useState(initialNote)
  

  return (
    <NoteContext.Provider value={{ note, setNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
