import React, { useState } from "react";

function Todo({ task = "default todo", id = "1", remove, update }) {
  const [editTask, setEdit] = useState(task);
  const [editing, setediting] = useState(false);

  const editMode = () => {
    setediting(edit => !edit);
  };

  const changeHndl = evt => {
    setEdit(evt.target.value);
  };

  const delHndl = () => remove(id);

  const updateHndl = evt => {
    evt.preventDefault();
    update(id, editTask);
    setediting(false);
  };

  let jsx = (
    <div>
      <li>{task}</li>
      <button onClick={editMode}>Edit Task</button>
      <button onClick={delHndl}>Remove Task</button>
    </div>
  );

  if (editing) {
    jsx = (
      <div>
        <form onSubmit={updateHndl}>
          <input type="text" value={editTask} onChange={changeHndl} />
          <button>Update task</button>
        </form>
      </div>
    );
  }

  return jsx;
}

export default Todo;
