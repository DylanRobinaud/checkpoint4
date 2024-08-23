import { useState } from "react";

import H3Component from "../../ui/text/H3component";
import TextArea from "../../ui/textArea/TextArea";
import ButtonSubmit from "../../ui/button/buttonSubmit/ButtonSubmit";

import connexion from "../../../services/connexion";

import "./ModifyNote.css";

const initialNote = {
  note_text: "",
};

function ModifyNote({ contactId }) {
  const [note, setNote] = useState(initialNote);

  const handleNoteChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const handleSubmitModify = async (e) => {
    e.preventDefault();
    try {
      await connexion.put(`/api/notes/${contactId}`, note);
      setNote(initialNote);
    } catch (error) {
      console.error("There was an error updating the note!", error);
    }
  };

  return (
    <article>
      <form onSubmit={handleSubmitModify}>
        <fieldset>
          <legend>
            <H3Component title3="Note :" />
          </legend>
          <TextArea
            label="Modifie la note :"
            id="note_text"
            name="note_text"
            value={note.note_text}
            placeholder=""
            onChange={handleNoteChange}
          />
        </fieldset>
        <div className="form-button">
          <ButtonSubmit
            text="Submit"
            css="form-button"
            handleClick={handleSubmitModify}
          />
        </div>
      </form>
    </article>
  );
}

export default ModifyNote;
