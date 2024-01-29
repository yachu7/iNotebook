import React, { useContext, useEffect, useRef, useState } from "react";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";
import noteContext from "../context/notes/noteContext";

function Notes() {
  const context = useContext(noteContext);
  const { note, getNote, editNote } = context;
  useEffect(() => {
    getNote();
  }, []);

  const [notes, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const ref = useRef(null);

  const refClose = useRef(null);

  const handleClick = (e) => {
    console.log("Updating Note . . .. ");
    editNote(notes.id, notes.etitle, notes.edescription, notes.etag);
    refClose.current.click();
  };
  const onChange = (e) => {
    setNote({ ...notes, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Addnote />
      <button
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Note
              </h1>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    value={notes.etitle}
                    minLength={3}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    onChange={onChange}
                    value={notes.edescription}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    onChange={onChange}
                    value={notes.etag}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
                disabled={ notes.etitle.length < 3 || notes.edescription.length < 5 }

              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2>Add a Note</h2>
        <div className="container">
          {note.length === 0 && "No Notes to display."}
        </div>
        {note.map((notes) => {
          return (
            <Noteitem key={notes._id} notes={notes} updateNote={updateNote} />
          );
        })}
      </div>
    </>
  );
}

export default Notes;
