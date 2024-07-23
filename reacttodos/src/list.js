import React, { useState } from "react";
import Todo from "./todo";
import NewForm from "./todoForm";

function TdList() {
  const [todos, setTodos] = useState([]);

  const create = newTodo => {
    setTodos(todos => [...todos, newTodo]);
  };

  const update = (id, updatedTask) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, task: updatedTask } : todo
      )
    );
  };

  const del = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const compon = todos.map(todo => (
    <Todo
      remove={del}
      key={todo.id}
      id={todo.id}
      task={todo.task}
      update={update}
    />
  ));

  return (
    <div>
      <NewForm makeList={create} />
      <ul>{compon}</ul>
    </div>
  );
}

export default TdList;
