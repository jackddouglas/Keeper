import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: String,
    content: String,
  });

  function addNote(e) {
    props.setNotes((prevValues) => {
      return [...prevValues, note];
    });

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

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          value={note.content}
          rows="3"
        />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
