import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function NewForm({ makeList }) {
  const [task, createTask] = useState("");

  const changeHndl = evt => {
    createTask(evt.target.value);
  };

  const gatherInput = evt => {
    evt.preventDefault();
    makeList({ task, id: uuid() });
    createTask("");
  };

  return (
    <div>
      <form onSubmit={gatherInput}>
        <label htmlFor="task">Task:</label>
        <input
          id="task"
          name="task"
          type="text"
          onChange={changeHndl}
          value={task}
        />
        <button>Add task</button>
      </form>
    </div>
  );
}

export default NewForm;
