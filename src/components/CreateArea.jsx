import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: String,
    content: String,
  });
  const [isClicked, setIsClicked] = useState(false);

  function addNote(e) {
    props.setNotes((prevValues) => {
      return [...prevValues, note];
    });

    setNote({ title: "", content: "" });
    e.preventDefault();
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setNote((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  }

  function handleClick() {
    setIsClicked(true);
  }

  return (
    <div>
      <form className="create-note">
        {isClicked && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          onChange={handleChange}
          onClick={handleClick}
          name="content"
          placeholder="Take a note..."
          value={note.content}
          rows={isClicked ? 3 : 1}
        />
        <Zoom in={isClicked}>
          <Fab onClick={addNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
