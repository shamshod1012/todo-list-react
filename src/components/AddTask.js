import { useState } from "react";
import React from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

    function onSubmit(e) {
        e.preventDefault();

        if (!text) {
            alert('please add task')
            return
        }
        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

  return (
    <form  className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          type="text"
          placeholder="add task"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="form-control ">
        <label htmlFor="">day & time</label>
        <input
          type="text"
          placeholder="add day & time"
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor=""> set reminder </label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => {
            setReminder(e.currentTarget.checked);
          }}
        />
      </div>

      <input value={'submit'} type="submit" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
