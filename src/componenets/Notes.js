import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';


function Notes() {
    const context = useContext(noteContext);
    const {note , setNote} = context;
  return (
    <div className="row my-3">
      <h2>Add a Note</h2>
      {note.map((notes)=>{
        return  <Noteitem notes ={notes} /> 
      })}

      </div>
  )
}

export default Notes