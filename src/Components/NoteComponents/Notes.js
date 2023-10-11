import { React, useState, useEffect } from "react";
import "../css/Note.css";
import Note from "./Note"
import CreateNote from "./CreateNote";
import { v4 as uuid } from "uuid";
function Notes() {
    const [notes, setNotes] = useState([]);
    const [inputText, setInputText] = useState("");
    const textHandler = (e) => {
        setInputText(e.target.value);
    };
    const deleteNote = (id) => {
        const filteredNotes = notes.filter((note) => note.id !== id);
        setNotes(filteredNotes);
      };
      const saveHandler = () => {
        setNotes((prevState) => [
          ...prevState,
          {
            id: uuid(),
            text: inputText,
          },
        ]);
        //clear the textarea
        setInputText("");
      };
      useEffect(() => {
        const data = JSON.parse(localStorage.getItem("Notes"));
        if (data) {
          setNotes(data);
        }
      }, []);
      return (
        <div className="notes">
          {notes.map((note) => (
            <Note
              key={note.id}
              id={note.id}
              text={note.text}
              deleteNote={deleteNote}
            />
          ))}
          <CreateNote
            textHandler={textHandler}
            saveHandler={saveHandler}
            inputText={inputText}
          />
        </div>
      );
}



export default Notes;