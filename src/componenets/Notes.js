import React, { useContext, useEffect } from "react";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";
import noteContext from "../context/notes/noteContext";

function Notes() {
  const context = useContext(noteContext);
  const { note, getNote } = context;
  useEffect(() => {
    getNote();
  }, []);

  return (
    <>
      <Addnote />
      <div className="row my-3">
        <h2>Add a Note</h2>
        {note.map((notes) => {
          return <Noteitem key={notes._id} notes={notes} />;
        })}
      </div>
    </>
  );
}

export default Notes;
