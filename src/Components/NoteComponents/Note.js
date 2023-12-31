import { React } from "react";
import App from "../../App";
function Note({ id, text, deleteNote }) {
    return (
      <div className="note">
        <div className="note__body">{text}</div>
        <div className="note__footer" style={{ justifyContent: "flex-end" }}>
          {/* <DeleteForeverOutlinedIcon
            className="note__delete"
            onClick={() => deleteNote(id)}
            aria-hidden="true"
          ></DeleteForeverOutlinedIcon> */}
        </div>
      </div>
    );
  }
  export default Note;